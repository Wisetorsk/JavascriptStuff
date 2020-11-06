class Trig {
    constructor(pointA) {
        this.me = pointA;
    }

    static angle(pointA, pointB) {
        return Math.atan(pointB.y - pointA.y, pointB.x - pointA.x);
    }

    static toDegrees(radians) {
        return radians*(180/Math.PI);
    }
}