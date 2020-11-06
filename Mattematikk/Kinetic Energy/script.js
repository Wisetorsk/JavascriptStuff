let outputContainer = document.getElementById("ke");
let massSlider = document.getElementById("mass");
let velocitySlider = document.getElementById("velocity");
let massOutput = document.getElementById("massOut");
let velocityOutput = document.getElementById("velocityOut");

function calculate() {
    let result = 0.5 * massSlider.value * (velocitySlider.value*0.28)**2;
    outputContainer.innerHTML = result.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}

function updateRes() {
    velocityOutput.innerHTML = velocitySlider.value;
    massOutput.innerHTML = massSlider.value;
    calculate();
}

updateRes();

class CompName extends React.Component { 
    render() {
        logic
        return (
            MainComponent
        );
    }
}