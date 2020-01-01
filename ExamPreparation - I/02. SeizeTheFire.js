function solve(input){
    let effort = 0;
    let totalFire = 0;
    let cells = [];
    let levelOfFire = input.shift();
    let water = input[0];
    let tokens = levelOfFire.split('#');
    let lastWaterValue = 0;

    for (let i = 0; i < tokens.length; i++) {
        let fireArgs = tokens[i].split(' = ');
        let typeOfFire = fireArgs[0];
        let value = Number(fireArgs[1]);
        if (typeOfFire === 'Low') {
            if (value > 0 && value <= 50) {
                lastWaterValue = water;
                water -= value;                
                if (checkIsWaterEnough(water)) {
                    water = lastWaterValue
                    continue;
                }            
                effort += value * 0.25;
                totalFire += value;   
                cells.push(value); 
            }
        }else if (typeOfFire === 'Medium') {
            if (value > 50 && value <= 80) {
                lastWaterValue = water;
                water -= value;
                if (checkIsWaterEnough(water)) {
                    water = lastWaterValue
                    continue;
                }            
                effort += value * 0.25;
                totalFire += value; 
                cells.push(value);
            }
        }else if (typeOfFire === 'High') {
            if (value > 80 && value <= 125) {
                lastWaterValue = water;
                water -= value;
                if (checkIsWaterEnough(water)) {
                    water = lastWaterValue
                    continue;
                }            
                effort += value * 0.25;
                totalFire += value; 
                cells.push(value);
            }
        }       
    }

    console.log('Cells:');
    for (const cell of cells) {
        console.log(` - ${cell}`);
    }

    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);

    function checkIsWaterEnough(water) {
        return water < 0;
    }   
}

solve(['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
    220]);