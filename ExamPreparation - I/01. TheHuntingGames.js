function solve(input){
    let days = input[0];
    let players = input[1];
    let groupEnergy = input[2];
    let waterPerDay = input[3];
    let foodPerDay = input[4];
    let totalWater = days * players * waterPerDay;
    let totalFood = days * players * foodPerDay;
    let daysCounter = 1;
    for (let i = 5; i < input.length; i++) {
        groupEnergy -= input[i];
        if (!checkEnergy(groupEnergy)) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }    

        if (daysCounter % 2 === 0) {
            groupEnergy *= 1.05;
            totalWater -= totalWater * 0.30;           
        }     
        
        if (daysCounter % 3 === 0) {
            groupEnergy *= 1.10;
            totalFood -= totalFood / players;
        }

        daysCounter++;
    }   

    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    
    function checkEnergy(energy){
        return energy > 0;
    }
}

solve([12,
    6,
    4430,
    9.8,
    5.5,
    620.3,
    840.2,
    960.1,
    220,
    340,
    674,
    365,
    345.5,
    212,
    412.12,
    258,
    496,
    ]);