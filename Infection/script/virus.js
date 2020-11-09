class Virus {;
    constructor(symptomaticR=.25, asymptomaticR=.10, infectiveRadius=10, mortality=0.04, avgIncubation=14) {
        this.asymptomaticR = asymptomaticR;
        this.symptomaticR = symptomaticR;
        this.infectiveRadius = infectiveRadius;
        this.baseMortalityRate = mortality; 
        // replace with Mortality(age) = alpha*e**(beta*age) + lambda 
        // Meantime use either a simple exponential function or even linear component. 
        // (https://en.wikipedia.org/wiki/Gompertz%E2%80%93Makeham_law_of_mortality)
        this.avgIncubation = avgIncubation;
    }

    static mortalityFunction(age, crossover=65) {
        // Returns probability of death based on the given age. 1 = certain death, 0 = person always lives.
        let f = 1-(100/(age+100));
        let h = (crossover - age)**2/(20*age);
        if (age <= crossover) {
            return f;
        } else {
            return f + h;
        }
    }

}