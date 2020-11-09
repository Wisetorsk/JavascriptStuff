class Enviroment {
    // StaticVariables
    static ticksPerYear = 365;

    // Locals
    time = 0;
    timestep = 1;
    currentLogs = {
        activeInfections: 0,
        totalInfections: 0,
        totalImmune: 0,
        currentImmune: 0,
        dead: 0,
    };

    logHist = []; // Array of all logs indexed by timestep

    constructor(virus, boundaries={x: 500, y: 500}, people=100) {
        this.virus = virus; // Virus object
        this.bounds = boundaries; // Implement check to be sure that given bounds are valid and correctly formatted
        this.people = [...Array(people)].map(i => new Person(Math.floor(Math.random()*boundaries.x), Math.floor(Math.random()*boundaries.y)))
    }

    /*
    Needs to:
        Control all people objects
        Select one person.
        Get an array of all Persons within a infective radius. (radius given by Virus object).
        Run individual infections per person. 
        Move all persons around. (Two persons CANNOT occupy the same {x, y}!!!!!!!!!)

    Future: 
        - Currently the simulated persons can occupy the same x and y coordinates, but this should be altered so only one simulant can be in one (x, y) at a time.

    To speed up calculation, it may be benificial to divide the grid up into quadrants/zones. Then only run the needed functions if they are occupied

    Subdivision: 

         ______.______.______
        |      |      |      |
        | x0y0 | x1y0 | x2y0 |
        |______|______|______|
        |      |      |      |
        | x0y1 | x1y1 | x2y1 |
        |______|______|______|
        |      |      |      |
        | x0y2 | x1y2 | x2y2 |
        |______|______|______|


    */

    oneCycle() {
        /* Runs all methods required in one "timestep"/cycle */
        time++;
    }

    updatePositions() {
        // Updates the positions of all persons by updating x and y based on x, y -Velocity
    }

    isInSameSpot(personA, personB) { // Implement later
        // Returns true if both persons occupy the same space
    }

    controlAllPositions() { // Implement later
        // Controls wether two persons occupy the same x, y coordinate. If two or more are in the same position, randomly move one pixel
    }

    personsWithinRadius(person) {
        // Return an array of person objects within the infective radius of the currently active virus (this.virus)
        // If there are no persons within radius, return false
    }

    infectionCycle() {
        // Runs the infection method on all persons in the system
    }

    death() {
        // Run the death function per person. If person dies, remove them from the population
        // person.die(this.virus);
    }

    saveData() {
        // Logs the current state dataset by running generateDataset() and saving it in a variable indexed by timestep
        if (this.time % this.timestep == 0) {
            //LOG SHIT!
            this.logHist.push(this.currentLogs);
        }
    }

    generateDataset(out=false) {
        // Constructs a collection of data of all persons in the system at the current time.
        // Put data in this.currentLogs object. Return if needed
        if (out) {
            return this.currentLogs;
        }
    }
}
