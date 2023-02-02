import { GeoCircle, GeoPoint } from '../geo';
import { UnitType } from '../math';
import { BinaryHeap } from '../utils/datastructures';
import { BoundaryVectorType } from './Facilities';
/**
 * A boundary (airspace) with pre-processed LODs.
 */
export class LodBoundary {
    /**
     * Constructor.
     * @param facility This boundary's facility object.
     * @param lodDistanceThresholds The Douglas-Peucker thresholds, in great-arc radians, used by each LOD level. If
     * undefined or an empty array, only one LOD level (LOD0) will be created with a distance threshold of 0.
     * @param lodVectorCountTargets The vector count targets for each LOD level. The number of vectors per shape after
     * simplification will not exceed the LOD levels' target. Non-positive targets are interpreted as unlimited.
     * If undefined, all LOD levels will be assigned an unlimited vector count target.
     */
    constructor(facility, lodDistanceThresholds, lodVectorCountTargets) {
        this.facility = facility;
        this.lodDistanceThresholds = (lodDistanceThresholds === null || lodDistanceThresholds === void 0 ? void 0 : lodDistanceThresholds.length) ? [...lodDistanceThresholds] : [0];
        this.lodVectorCountTargets = lodVectorCountTargets ? [...lodVectorCountTargets] : [];
        this.lods = this.processLods();
    }
    /**
     * Processes this boundary's LOD levels.
     * @returns This boundary's processed LOD levels.
     */
    processLods() {
        var _a;
        const lodShapes = [];
        // Initialize unsimplified shapes
        const originalShapes = this.processShapes(this.facility.vectors);
        if (Array.isArray(this.facility.lods)) {
            //From the sim, LOD0 is always the original shapes
            lodShapes.push(originalShapes);
            //Process the rest of the already simplified sim LODs into shapes
            for (let i = 0; i < this.facility.lods.length; i++) {
                lodShapes.push(this.processShapes(this.facility.lods[i]));
            }
        }
        else {
            let startIndex = 0;
            if (this.lodDistanceThresholds[0] === 0 && ((_a = this.lodVectorCountTargets[0]) !== null && _a !== void 0 ? _a : 0) <= 0) {
                // LOD0 has no simplification, so just use the original shapes
                lodShapes.push(originalShapes);
                startIndex = 1;
            }
            // Calculate other LOD levels
            const len = this.lodDistanceThresholds.length;
            for (let i = startIndex; i < len; i++) {
                lodShapes.push(this.simplifyShapes(originalShapes, this.lodDistanceThresholds[i], this.lodVectorCountTargets[i]));
            }
        }
        return lodShapes;
    }
    /**
     * Processes this boundary's facility's vectors into boundary shapes.
     * @param vectors The vectors to process.
     * @returns Boundary shapes corresponding to this boundary's facility's vectors.
     */
    processShapes(vectors) {
        const shapes = [];
        const len = vectors.length;
        let index = 0;
        let currentShape;
        while (index < len) {
            const vector = vectors[index];
            switch (vector.type) {
                case BoundaryVectorType.Start:
                    currentShape = [];
                    index = this.processShape(currentShape, vectors, index);
                    shapes.push(currentShape);
                    break;
                case BoundaryVectorType.Circle:
                    currentShape = [];
                    index = this.processCircle(currentShape, vectors, index - 1);
                    shapes.push(currentShape);
                    break;
            }
            index++;
        }
        return shapes;
    }
    /**
     * Processes a single, non-circle boundary shape from this boundary's facility's vectors.
     * @param shape The shape to be processed.
     * @param vectors The array containing the facility boundary vectors making up the shape.
     * @param index The index of the first facility boundary vector which makes up the shape.
     * @returns The index of the last facility boundary vector which makes up the shape.
     */
    processShape(shape, vectors, index) {
        const start = vectors[index++];
        shape.push({ end: new GeoPoint(start.lat, start.lon) });
        const origins = [];
        const len = vectors.length;
        while (index < len) {
            const lastEndpoint = shape[shape.length - 1].end;
            const vector = vectors[index];
            switch (vector.type) {
                case BoundaryVectorType.Start:
                    break;
                case BoundaryVectorType.Line:
                    if (!lastEndpoint.equals(vector)) {
                        shape.push({ circle: GeoCircle.createGreatCircle(lastEndpoint, vector), end: new GeoPoint(vector.lat, vector.lon) });
                    }
                    break;
                case BoundaryVectorType.Origin:
                    origins[vector.originId] = vector;
                    break;
                case BoundaryVectorType.ArcCCW:
                    {
                        const origin = origins[vector.originId];
                        const end = new GeoPoint(vector.lat, vector.lon);
                        const radius = end.distance(origin);
                        shape.push({ circle: GeoCircle.createFromPoint(origin, radius), end });
                        break;
                    }
                case BoundaryVectorType.ArcCW:
                    {
                        const origin = origins[vector.originId];
                        const end = new GeoPoint(vector.lat, vector.lon);
                        const circle = GeoCircle.createFromPoint(origin, end.distance(origin)).reverse();
                        shape.push({ circle, end });
                        break;
                    }
                case BoundaryVectorType.Circle:
                    return index - 1;
            }
            index++;
        }
        return index - 1;
    }
    /**
     * Processes a single circle boundary shape from this boundary's facility's vectors.
     * @param shape The shape to be processed.
     * @param vectors The array containing the facility boundary vectors making up the shape.
     * @param index The index of the first facility boundary vector which makes up the shape.
     * @returns The index of the last facility boundary vector which makes up the shape.
     */
    processCircle(shape, vectors, index) {
        const originVector = vectors[index];
        const circleVector = vectors[index + 1];
        if (originVector.type === BoundaryVectorType.Origin && circleVector.originId === originVector.originId) {
            const radius = UnitType.METER.convertTo(circleVector.radius, UnitType.GA_RADIAN);
            const circle = GeoCircle.createFromPoint(originVector, radius);
            // pick an arbitrary endpoint for the circle.
            const isCenterPole = circle.center[0] === 0 && circle.center[1] === 0 && Math.abs(circle.center[2]) === 1;
            const end = isCenterPole ? new GeoPoint(0, 0) : new GeoPoint(90, 0);
            circle.closest(end, end);
            shape.push({ end });
            shape.push({ circle, end });
        }
        return index + 1;
    }
    /**
     * Simplifies boundary shapes using the Douglas-Peucker algorithm.
     * @param shapes The boundary shapes to simplify.
     * @param distanceThreshold The Douglas-Peucker distance threshold, in great-arc radians.
     * @param vectorCountTarget The vector count target for the simplified shapes. An undefined value is interpreted as
     * an unlimited target.
     * @returns The simplified boundary shapes.
     */
    simplifyShapes(shapes, distanceThreshold, vectorCountTarget) {
        const simplified = [];
        const len = shapes.length;
        for (let i = 0; i < len; i++) {
            simplified.push(this.simplifyShape(shapes[i], distanceThreshold, vectorCountTarget));
        }
        return simplified;
    }
    /**
     * Simplifies a boundary shape using the Douglas-Peucker algorithm.
     * @param shape The boundary shape to simplify.
     * @param distanceThreshold The Douglas-Peucker distance threshold, in great-arc radians.
     * @param vectorCountTarget The vector count target for the simplified shape. An undefined value is interpreted as
     * an unlimited target.
     * @returns The simplified boundary shape.
     */
    simplifyShape(shape, distanceThreshold, vectorCountTarget) {
        if (shape.length < 3) {
            return shape;
        }
        const simplified = [];
        const retain = [];
        retain[0] = true;
        retain[shape.length - 1] = true;
        if (vectorCountTarget === undefined || vectorCountTarget <= 0) {
            this.simplify(distanceThreshold, shape, 0, shape.length, retain);
        }
        else {
            this.simplifyToVectorCount(distanceThreshold, vectorCountTarget, shape, 0, shape.length, retain);
        }
        this.rebuildSimplifiedVectors(shape, retain, simplified);
        return simplified;
    }
    /**
     * Simplifies a sequence of vectors in a boundary shape using the Douglas-Peucker algorithm.
     * @param distanceThreshold The Douglas-Peucker distance threshold, in great-arc radians.
     * @param shape The boundary shape containing the vectors to simplify.
     * @param startIndex The index of the first vector in the sequence to simplify, inclusive.
     * @param endIndex The index of the last vector in the sequence to simplify, exclusive.
     * @param retain An array of boolean values indicating which vectors in the shape to retain after simplification.
     */
    simplify(distanceThreshold, shape, startIndex, endIndex, retain) {
        if (startIndex + 1 >= endIndex) {
            return;
        }
        const start = shape[startIndex].end;
        const end = shape[endIndex - 1].end;
        const reference = start.equals(end) ? start : LodBoundary.geoCircleCache[0].setAsGreatCircle(start, end);
        const farthest = this.findFarthestVector(shape, startIndex + 1, endIndex - 1, reference);
        if (farthest.index < 0) {
            return;
        }
        if (farthest.distance >= distanceThreshold) {
            retain[farthest.index] = true;
            this.simplify(distanceThreshold, shape, startIndex, farthest.index + 1, retain);
            this.simplify(distanceThreshold, shape, farthest.index, endIndex, retain);
        }
    }
    /**
     * Simplifies a sequence of vectors in a boundary shape using the Douglas-Peucker algorithm to a target vector count.
     * @param distanceThreshold The Douglas-Peucker distance threshold, in great-arc radians.
     * @param vectorCountTarget The vector count target for the simplified shape.
     * @param shape The boundary shape containing the vectors to simplify.
     * @param startIndex The index of the first vector in the sequence to simplify, inclusive.
     * @param endIndex The index of the last vector in the sequence to simplify, exclusive.
     * @param retain An array of boolean values indicating which vectors in the shape to retain after simplification.
     */
    simplifyToVectorCount(distanceThreshold, vectorCountTarget, shape, startIndex, endIndex, retain) {
        if (startIndex + 1 >= endIndex) {
            return;
        }
        const queue = LodBoundary.queue;
        queue.clear();
        let edgeIndex = 0;
        let currentStartIndex = startIndex;
        let currentEndIndex = endIndex;
        let currentFarthestIndex;
        let retainCount = 2; // the first and last vectors of a shape are always retained
        while (retainCount < vectorCountTarget) {
            if (currentFarthestIndex === undefined) {
                this.computeAndInsertEdgeToQueue(distanceThreshold, shape, currentStartIndex, currentEndIndex, queue, edgeIndex++);
            }
            else if (currentFarthestIndex >= 0) {
                this.computeAndInsertEdgeToQueue(distanceThreshold, shape, currentStartIndex, currentFarthestIndex + 1, queue, edgeIndex++);
                this.computeAndInsertEdgeToQueue(distanceThreshold, shape, currentFarthestIndex, currentEndIndex, queue, edgeIndex++);
            }
            if (queue.size === 0) {
                break;
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const edge = queue.removeMin();
            currentStartIndex = edge.startIndex;
            currentEndIndex = edge.endIndex;
            currentFarthestIndex = edge.farthestVectorIndex;
            retain[currentFarthestIndex] = true;
            retainCount++;
        }
    }
    /**
     * Computes an edge and inserts it into a priority queue if the distance from the edge to the farthest vector is
     * greater than a specified distance threshold.
     * @param distanceThreshold The Douglas-Peucker distance threshold, in great-arc radians.
     * @param shape The boundary shape containing the vectors to simplify.
     * @param startIndex The index of the vector at the start of the edge.
     * @param endIndex The index of the vector at the end of the edge.
     * @param queue The priority queue into which to insert the edge.
     * @param edgeIndex The index from which to retrieve an edge from the edge cache, if needed.
     */
    computeAndInsertEdgeToQueue(distanceThreshold, shape, startIndex, endIndex, queue, edgeIndex) {
        var _a;
        var _b;
        const start = shape[startIndex].end;
        const end = shape[endIndex - 1].end;
        const reference = start.equals(end) ? start : LodBoundary.geoCircleCache[0].setAsGreatCircle(start, end);
        const farthest = this.findFarthestVector(shape, startIndex + 1, endIndex - 1, reference);
        if (farthest.distance >= distanceThreshold) {
            const edge = (_a = (_b = LodBoundary.edgeCache)[edgeIndex]) !== null && _a !== void 0 ? _a : (_b[edgeIndex] = LodBoundary.createEdge());
            edge.startIndex = startIndex;
            edge.endIndex = endIndex;
            edge.farthestVectorIndex = farthest.index;
            edge.distanceToFarthestVector = farthest.distance;
            queue.insert(edge);
        }
    }
    /**
     * Finds the vector in a boundary shape containing the farthest point from a reference.
     * @param shape The shape containing the vectors to search.
     * @param startIndex The index of the first vector to search, inclusive.
     * @param endIndex The index of the last vector to search, exclusive.
     * @param reference The reference to which to measure distance.
     * @returns The index of the vector containing the farthest point from a reference, and the corresponding distance in great-arc radians.
     */
    // eslint-disable-next-line jsdoc/require-jsdoc
    findFarthestVector(shape, startIndex, endIndex, reference) {
        let maxDistance = 0;
        let index = -1;
        for (let i = startIndex; i < endIndex; i++) {
            const distance = this.getDistanceFromReference(shape, i, reference);
            if (distance > maxDistance) {
                index = i;
                maxDistance = distance;
            }
        }
        return { index, distance: maxDistance };
    }
    /**
     * Calculates the maximum distance from a vector in a boundary shape to a reference.
     * @param shape The shape containing the vector to query.
     * @param index The index of the vector to query.
     * @param reference The reference to which to measure the distance.
     * @returns The maximum distance from the vector to the reference, in great-arc radians.
     */
    getDistanceFromReference(shape, index, reference) {
        const vector = shape[index];
        if (!vector.circle) {
            // If the vector has no path (should not actually ever happen), we will just compute the distance to the vector end point.
            return reference instanceof GeoCircle ? Math.abs(reference.distance(vector.end)) : reference.distance(vector.end);
        }
        else {
            /*
             * We need to find the point along the vector path circle that is the farthest from the reference. This point is
             * either one of the arc endpoints (of which we only care about the end point, since the start point is
             * considered part of the previous vector), the projection of the reference point or center of the reference
             * circle onto the arc circle, or the reflection of the projected point across the arc's center. While the former
             * is always a potential candidate, the latter two are candidates only if they lie within the arc.
             */
            const center = reference instanceof GeoCircle ? reference.center : reference;
            const arcStart = shape[index - 1].end;
            const maxAngularDist = vector.circle.angleAlong(arcStart, vector.end, Math.PI);
            const projectedAngularDist = vector.circle.angleAlong(arcStart, center, Math.PI);
            const oppositeAngularDist = (projectedAngularDist + Math.PI) % (2 * Math.PI);
            let arcDistance;
            if (oppositeAngularDist > 0 && oppositeAngularDist < maxAngularDist) {
                arcDistance = Math.abs(vector.circle.distance(center) + vector.circle.radius * 2);
                arcDistance = Math.min(arcDistance, 2 * Math.PI - arcDistance);
            }
            else if (projectedAngularDist > 0 && projectedAngularDist < maxAngularDist) {
                arcDistance = Math.abs(vector.circle.distance(center));
            }
            if (reference instanceof GeoCircle) {
                return arcDistance ? Math.abs(arcDistance - Math.PI / 2) : Math.abs(reference.distance(vector.end));
            }
            else {
                return arcDistance !== null && arcDistance !== void 0 ? arcDistance : vector.end.distance(reference);
            }
        }
    }
    /**
     * Rebuilds vectors for a simplified shape.
     * @param shape The original shape.
     * @param retain An array of boolean values indicating which vectors in the shape to retain after simplification.
     * @param simplified The simplified shape to which to add the rebuilt vectors.
     */
    rebuildSimplifiedVectors(shape, retain, simplified) {
        var _a;
        let lastRetained;
        const len = shape.length;
        for (let i = 0; i < len; i++) {
            if (!retain[i]) {
                continue;
            }
            const currentVector = shape[i];
            if (currentVector) {
                const prevRetain = retain[i - 1];
                const prevVector = shape[i - 1];
                if (!prevRetain) {
                    // The vector immediately before the current vector was pruned, so we need to reconcile the new start point
                    // of the current retained vector.
                    if (lastRetained) {
                        if (currentVector.circle && !currentVector.circle.isGreatCircle()) {
                            // The current retained vector is not a great circle (arc) -> we need to add a great-circle vector before
                            // it so that we maintain the start point of the arc.
                            simplified.push({ circle: GeoCircle.createGreatCircle(lastRetained.end, prevVector.end), end: prevVector.end });
                            simplified.push(LodBoundary.copyVector(currentVector));
                        }
                        else if ((_a = currentVector.circle) === null || _a === void 0 ? void 0 : _a.isGreatCircle()) {
                            // The current retained vector is a great circle -> we need to replace it with another one that begins
                            // at the correct point (the end of the last retained vector).
                            simplified.push({ circle: GeoCircle.createGreatCircle(lastRetained.end, currentVector.end), end: currentVector.end });
                        }
                        else {
                            // The current retained vector is a start vector -> straight copy since start vectors only have an end point.
                            simplified.push(LodBoundary.copyVector(currentVector));
                        }
                    }
                    else {
                        // This case should only happen with the retained start vector at the beginning of a shape.
                        simplified.push({ end: currentVector.end });
                    }
                }
                else {
                    // The vector immediately before the current vector was retained
                    simplified.push(LodBoundary.copyVector(currentVector));
                }
                lastRetained = currentVector;
            }
        }
    }
    /**
     * Copies a boundary shape vector.
     * @param source The vector to copy.
     * @returns A copy of `source`.
     */
    static copyVector(source) {
        return { circle: source.circle ? new GeoCircle(source.circle.center, source.circle.radius) : undefined, end: source.end.copy() };
    }
    /**
     * Creates an edge.
     * @returns An edge.
     */
    static createEdge() {
        return {
            startIndex: -1,
            endIndex: -1,
            farthestVectorIndex: -1,
            distanceToFarthestVector: 0
        };
    }
}
LodBoundary.geoCircleCache = [new GeoCircle(new Float64Array(3), 0)];
LodBoundary.edgeCache = [];
LodBoundary.queue = new BinaryHeap((a, b) => b.distanceToFarthestVector - a.distanceToFarthestVector);
