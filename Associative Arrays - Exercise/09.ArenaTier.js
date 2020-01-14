function solve(input) {
    const gladiatorsPool = {};

    for (const line of input) {
        if (line.includes('->')) {
            const [gladiator, technique, skill] = line.split(' -> ');
            if (gladiator === 'Ave Cesar') {
                break;
            }
            if (!gladiatorsPool.hasOwnProperty(gladiator)) {
                gladiatorsPool[gladiator] = {};
                gladiatorsPool[gladiator].skill = 0;
                gladiatorsPool[gladiator].techniques = {};
            }            
            if (!gladiatorsPool[gladiator].techniques.hasOwnProperty(technique)) {
                gladiatorsPool[gladiator].techniques[technique] = Number(skill);
            } else {
                const currentSkill = Number(gladiatorsPool[gladiator][technique]);
                if (currentSkill < +skill) {
                    gladiatorsPool[gladiator].techniques[technique] = +skill;
                    const differenceBtwSkills = +skill - currentSkill;
                    gladiatorsPool[gladiator].skill += differenceBtwSkills;
                    continue;             
                }
            } 
            gladiatorsPool[gladiator].skill += +skill;    
        } else {
            const [gladiatorOne, gladiatorTwo] = line.split(' vs ');
            if (gladiatorsPool.hasOwnProperty(gladiatorOne) && gladiatorsPool.hasOwnProperty(gladiatorTwo)) {
                const gladiatorOneTechniques = Object.keys(gladiatorsPool[gladiatorOne].techniques);
                const gladiatorTwoTechniques = Object.keys(gladiatorsPool[gladiatorTwo].techniques);
                const gladiatorOneSkill = gladiatorsPool[gladiatorOne].skill;
                const gladiatorTwoSkill = gladiatorsPool[gladiatorTwo].skill;

                const common = gladiatorOneTechniques.filter(item => gladiatorTwoTechniques.includes(item));

                if (common.length > 0) {
                    if (gladiatorOneSkill > gladiatorTwoSkill) {
                        delete gladiatorsPool[gladiatorTwo];
                    } else if (gladiatorTwoSkill > gladiatorOneSkill) {
                        delete gladiatorsPool[gladiatorOne];
                    }
                }
            }
        }     
    }     
    
    const sortingGlads = (a, b) => b[1].skill - a[1].skill || a[0].localeCompare(b[0]);
    const sortingTechs = (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]);
 
    for (let [k, v] of Object.entries(gladiatorsPool).sort(sortingGlads)) {
        console.log(`${k}: ${gladiatorsPool[k].skill} skill`);
        for (let [key, value] of Object.entries(v)) {
            if (key == 'techniques') {
                for (let [k, v] of Object.entries(value).sort(sortingTechs)) {
                    console.log(`- ${k} <!> ${v}`);
                }
            }
        }
    }
}

solve([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]);