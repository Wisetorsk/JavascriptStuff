class Display {
    constructor(x, y, canvasId) {
        this.id = canvasId;
        this.width = x;
        this.height = y;
        this.canvas = document.getElementById(this.id);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }

    displayPerson(x, y, radius) {
        let circle = new Path2D();
        circle.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.stroke(circle);
    }

    displayInfectedPerson(x, y, radius) {
        let circle = new Path2D();
        circle.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill(circle);
    }

    displayPeople(people) {
        for (let person of people) {
            if (person.infected) {
                this.displayInfectedPerson(person.pos.x, person.pos.y, 3)
            } else {
                this.displayPerson(person.pos.x, person.pos.y, 3);
            }
        }
    }
}