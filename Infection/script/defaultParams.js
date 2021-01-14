const defaultParams = {
    symptomaticR:.25,                   // Chance that a symptomatic person will infect another
    asymptomaticR:.10,                  // Chance that a asymptomatic carrier will infect another
    infectiveRadius:10,                 // Radius around a person where they can infect another
    mortality:0.04,                     // Base probability of death
    avgIncubation:14,                   // Number of days (ticks) until the person becomes infectious
    asymptomaticChance:0.5,
    asymptomaticMortalityFactor:0.3    
}