class Spirograph {
    constructor(x0, y0, rList, thetaFactors){
        this.x0 = x0;
        this.y0 = y0;
        this.rList = rList;
        this.thetaFactors = thetaFactors;
        this.circles = [];
        for (let i in this.rList) {
            this.circles.push(new Circle(this.rList[i], this.thetaFactors[i]));
        }
    }

}


class Circle {
    constructor(r, factor) {
        this.r = r;
        this.factor = factor;
    }

    getPosition(theta) {
        return [this.r * Math.cos(theta*this.factor), this.r * Math.sin(theta*this.factor)]
    }
}