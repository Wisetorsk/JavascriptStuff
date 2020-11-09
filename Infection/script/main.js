let virus = new Virus(); // Virus with default params
let env = new Enviroment(virus);
env.people.forEach(i => Math.random() < 0.1 ? i.infected = true :i.infected = false )

// Do something repeating and call env.oneCycle()


//testing
let a = new Person();
let b = new Person();
a.asymptomatic = true;
let tries = 1;
while(1) {
    a.infectOther(b, virus);
    if (a.peopleInfected > 0) {
        break;
    } else {
        tries++;
    }
}
console.log("infected after %i attempts", tries);


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


class OutputField extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <h1>Results</h1>
            <div>Active people {this.props.enviroment.people.length}</div>
            <div>Active infections {this.props.enviroment.people.filter(i => i.infected).length}</div>
            </div>
        );
    }
}

function update() {
    ReactDOM.render(<OutputField enviroment={env}/>, document.getElementById("reactContainer"))
}

update();
