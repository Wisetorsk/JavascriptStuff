class Virus {
    constructor(params) {
        /* --PARAMETERS IN PARAMS OBJECT--
        asymptomaticR
        symptomaticR
        infectiveRadius
        mortality
        asymptomaticMortalityFactor
        avgIncubation;
        asymptomaticChance; // The chance that the person will be asymptomatic.

        // replace with Mortality(age) = alpha*e**(beta*age) + lambda 
        // Meantime use either a simple exponential function or even linear component. 
        // (https://en.wikipedia.org/wiki/Gompertz%E2%80%93Makeham_law_of_mortality)
        */
       this.params = params;
    }

    mortalityFunction(age, crossover=65, asymptomatic=false) {
        // Returns probability of death based on the given age. 1 = certain death, 0 = person always lives.
        /* Future revision should also alter the function to take in account if the person is an asymptomatic
        carrier and change the probalility accoridingly by som scaling factor. */
        let f = 1-(100/(age+100));
        let h = (crossover - age)**2/(20*age);
        let chance = 0;

        if (age <= crossover) {
            chance = f;
        } else {
            chance = f + h;
        }

        if (asymptomatic) {
            chance *= this.params.asymptomaticMortalityFactor;
        }

        return chance;
    }

}