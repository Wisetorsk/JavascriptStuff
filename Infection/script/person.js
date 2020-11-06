class Person {
    /*"Person" class
        Keeps track of all attributes of an individual person. 
            Age, time since last infection, number of people infected and state and type of infection
            */
    ticksOld = 0;
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
        let infectionChance = this.asymptomatic ? virus.asymptomaticR : virus.symptomaticR // Gets the infection chance of the virus based on if this person is asymptomatic or symptomatic carrier.
        if (infectionChance >= Math.random()) {
            if(person.infect()) { // Try to infect 
                // If infection succeeds, increment the number of people infected by this person.
                this.peopleInfected++;
            } 
        }
    }
}