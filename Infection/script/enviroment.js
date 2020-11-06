class Enviroment {
    time = 0;
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
    */

    oneCycle() {
        /* Runs all methods required in one "timestep"/cycle */
        time++;
    }
}
