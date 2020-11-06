
var testy = document.getElementById("canvasHolder");
var x = new Canvas(testy, {width: 800, height: 800}, "Constructed Canvas", false);

var testVertex = [
    [10,10,30,10],
    [30,10,30,30],
    [30,30,10,30],
    [10,30,10,10]
];

var testPolygon = Canvas.translateToVertex(Canvas.generateHexagon(60, 100, 100));
var testMultiple = [testPolygon, Canvas.translateToVertex(Canvas.generateHexagon(100, 120, 120))];


function build() {
    x.build();
}

class Ball {
    constructor(mass, pos, velocity) {
        this.mass = mass;
        this.pos = pos;
        this.velocity = velocity;
    }

    update() {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
    }

    applyForce(force) {
        this.velocity.x += force.x;
        this.velocity.y += force.y;
    }

    calculateForce(opposite) {
        let values = this._getStats(opposite);
        let force = ((this.mass * opposite.mass)/values.distance**2)*System.G
        return force;
    }

    _getStats(opposite) {
        let deltaX = opposite.pos.x - this.pos.x;
        let deltaY = opposite.pos.y - this.pos.y;
        let hypotenuse = Math.sqrt((deltaX)**2 + (deltaY)**2);
        let angle = Math.atan(deltaY, deltaX); 
        return {
            deltaX: deltaX,
            deltaY: deltaY,
            distance: hypotenuse,
            angle: angle
        };
    }

    static ToDegrees(rad) {
        return rad*(180/Math.PI);
    }
}

class System {
    static G = 6.67408*(10**-11);
    constructor() {

    }
}

let moon = new Ball(7.3*10**22, {x:3.84*10**8, y:0}, {x:0, y:0})
let earth = new Ball(5.97*10**24, {x:0, y:0}, {x:0, y:0})
console.log(earth.calculateForce(moon).toExponential());