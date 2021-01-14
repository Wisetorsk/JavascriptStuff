const defaultParams = {
    symptomaticR:.25,                   // Chance that a symptomatic person will infect another
    asymptomaticR:.10,                  // Chance that a asymptomatic carrier will infect another
    infectiveRadius:30,                 // Radius around a person where they can infect another
    mortality:0.04,                     // Base probability of death
    avgIncubation:14,                   // Number of days (ticks) until the person becomes infectious
    asymptomaticChance:0.5,
    asymptomaticMortalityFactor:0.3    
}

let virus = new Virus(defaultParams); // Virus with default params
let env = new Enviroment("canvas", virus);
numberToInfect = Math.floor(Math.random()*20)
env.setStartingInfected(numberToInfect);
//env.people.forEach(i => Math.random() < 0.05 ? i.infect() : i.infected = false )
env.oneCycle();



// MoveTest
/*
let bounds = {x: 50, y:50};
let closeLeft = new Person(3, 0);
closeLeft.direction.x = -15;
let closeRight = new Person(48, 0);
closeRight.direction.x = 5;

console.log("Starting at x: %i with direction: %i", closeLeft.pos.x, closeLeft.direction.x);
console.log("moving left");
closeLeft.move(bounds);
console.log("moved to %i ", closeLeft.pos.x);
console.log("\n\n");

console.log("Starting at x: %i with direction: %i", closeRight.pos.x, closeRight.direction.x);
console.log("moving left");
closeRight.move(bounds);
console.log("moved to %i ", closeRight.pos.x);
*/

