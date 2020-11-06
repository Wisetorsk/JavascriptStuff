class Spirograph {
    constructor(n, len=1000, scale=1, a=5, r=2, R=5, offsetX=250, offsetY=250) {
        this.n = [...Array(n).keys()].map(i => i/n*len);
        this.a = a;
        this.R = R;
        this.r = r;
        this.scale = scale;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    spiro(t) {
        let x, y;
        x = (this.R - this.r) * Math.cos((this.r/this.R) * t) + this.a * Math.cos((1-(this.r/this.R))*t);
        y = (this.R - this.r) * Math.sin((this.r/this.R) * t) - this.a * Math.sin((1-(this.r/this.R))*t);
        x*=this.scale;
        y*=this.scale;
        return [x + this.offsetX, y + this.offsetY];
    }

    epicyclic(t) {
        let x, y;
        x = (this.R + this.r) * Math.cos((this.r/this.R) * t) - this.a * Math.cos((1+(this.r/this.R))*t);
        y = (this.R + this.r) * Math.sin((this.r/this.R) * t) - this.a * Math.sin((1+(this.r/this.R))*t);
        x*=this.scale;
        y*=this.scale;
        return [x + this.offsetX, y + this.offsetY];
    }

    calculateSpiro() {
        let cordinates = [];
        for (let i of this.n) {
            cordinates.push(this.spiro(i));
        }
        return cordinates;
    }

    calculateEpicyclic() {
        let cordinates = [];
        for (let i of this.n) {
            cordinates.push(this.epicyclic(i));
        }
        return cordinates;
    }


}