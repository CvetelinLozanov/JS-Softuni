function solve(map, commands){
    let matrix = [];   
    let pollutedIndexes = [];
    for (let i = 0; i < 5; i++) {
        matrix.push(map[i].split(' ').map(Number));      
    }

    for (let i = 0; i < commands.length; i++) {
        let commandArgs = commands[i].split(' ');
        let command = commandArgs[0];
        let number = Number(commandArgs[1]);        
        if (command === 'breeze'){
            for (let row = number; row < number + 1; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    let value =  matrix[row][col] - 15;
                    if (checkForValidValue(value)){
                        continue;
                    }
                    matrix[row][col] -= 15;
                }
            }
        }else if(command === 'gale'){
            for (let col = number; col < number + 1; col++) {
                for (let row = 0; row < matrix.length; row++) {
                    let value =  matrix[row][col] - 20;
                    if (checkForValidValue(value)){
                        continue;
                    }
                    matrix[row][col] -= 20;
                }
            }
        }else if (command === 'smog'){
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {                   
                    matrix[row][col] += number;
                }
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let value = matrix[row][col];
            if (checkForValidPolution(value)){
                pollutedIndexes.push(`[${row}-${col}]`);
            }
        }
    }

    if (pollutedIndexes.length > 0){
        console.log(`Polluted areas: ${pollutedIndexes.join(', ')}`);
    }else{
        console.log('No polluted areas');
    }

    function checkForValidPolution(number){
        return number >= 50;
    }

    function checkForValidValue(number){
        return number < 0;
    }
}

solve(["5 7 72 14 4",
"41 35 37 27 33",
"23 16 27 42 12",
"2 20 28 39 14",
"16 34 31 10 24"],
["breeze 1", "gale 2", "smog 25"]
);