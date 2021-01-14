class Person {
    /*"Person" class
        Keeps track of all attributes of an individual person. 
            Age, time since last infection, number of people infected and state and type of infection
            */
    ticksOld = 0;
    age = 0;
    ticksSinceInfection = 0;
    asymptomatic = false;
    recovered = false;
    peopleInfected = 0; // Number of people infected by this person
    contacts = 0; // Number of people within infective radius

    constructor(xPos, yPos, infected=false, iR=10) {
        this.infectiveRadius = iR;
        this.infected = infected;
        this.pos = {x:xPos, y:yPos};
        this.direction = {
            x:(Math.random() < 0.5 ? 1 : -1) * Math.floor(Math.random()*4)+1, // Random x & y velocities between -4 & 4. 
            y:(Math.random() < 0.5 ? 1 : -1) * Math.floor(Math.random()*4)+1
        };
    }

    infect() {
        /* Checks to see if person is not already infected or recovered, and then sets infection to true */
        if (!this.recovered && !this.infected) {
            this.infected = true;
            return true;
        } else {
            return false;
        }
    }

    infectOther(person, virus) {
        /* Given that person is within range (decided by Enviroment in advance) Takes a person object and a virus object and runs infection function based on virus parameters. If the infection is successful, increment this.peopleInfected */
        this.contacts++; // Increment contact counter.
        if (this.ticksSinceInfection >= virus.params.avgIncubation) { // See if this person if currently infectious. 
        let infectionChance = this.asymptomatic ? virus.params.asymptomaticR : virus.params.symptomaticR // Gets the infection chance of the virus based on if this person is asymptomatic or symptomatic carrier.
            if (infectionChance >= Math.random()) { // See if this person will infect the other
                if(person.infect()) { // Infect other person
                    // If the person is not immune, the infection succeeds, increment the number of people infected by this person and return true
                    this.peopleInfected++;
                    return true;
                } 
            }
        }
        return false;
    }

    move(bounds) {
        if ((this.pos.x + this.direction.x) < bounds.x && (this.pos.x + this.direction.x) >= 0) { // No walls within x velocity distance
            this.pos.x += this.direction.x;
        } else {
            // Get remaining distance to wall 
            let remainderToWallX = (this.pos.x + this.direction.x >= bounds.x) ? bounds.x - this.pos.x : -this.pos.x;
            this.pos.x += remainderToWallX;
            //console.log("remainder to wall: %i ", remainderToWall)
            this.direction.x *= -1; // You are now at a wall, change direction
            let distanceLeftX = this.direction.x + remainderToWallX; // Get remaining distance left on move
            //console.log("Distance left: %i", distanceLeft)
            this.pos.x += distanceLeftX;
        }

        if ((this.pos.y + this.direction.y) < bounds.y && (this.pos.y + this.direction.y) >= 0) { // No walls within x velocity distance
            this.pos.y += this.direction.y;
        } else {
            // Get remaining distance to wall 
            let remainderToWallY = (this.pos.y + this.direction.y >= bounds.y) ? bounds.y - this.pos.y : -this.pos.y;
            this.pos.y += remainderToWallY;
            //console.log("remainder to wall: %i ", remainderToWall)
            this.direction.y *= -1; // You are now at a wall, change direction
            let distanceLeftY = this.direction.y + remainderToWallY; // Get remaining distance left on move
            //console.log("Distance left: %i", distanceLeft)
            this.pos.y += distanceLeftY;
        }

    }

    updateAge() {
        this.age = Math.floor(this.ticksOld / Enviroment.ticksPerYear); // Integer division
    }

    die() {
        // Calculate the age of this person based of ticks
        // If Math.random() <= Virus.mortalityFunction(this.age)
    }
}