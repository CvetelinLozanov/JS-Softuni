function solve(input){
    let matrix = [];
    let snowballDamage = 0;
    let killedBunniesCounter = 0;
    let hangarRows = input.length - 1;
    let hangarCols = input[0].split(' ').length;
    let bombBunnies = input[input.length - 1]
    .split(' ');

    for (let i = 0; i < input.length - 1; i++) {
        matrix.push(input[i].split(' ').map(Number));           
    }

    for (let i = 0; i < bombBunnies.length; i++) {
        let bombArgs = bombBunnies[i].split(',').map(Number);
        let bombRow = bombArgs[0];
        let bombCol = bombArgs[1];
        let bombValue = matrix[bombRow][bombCol]; 
        if (bombValue > 0){
            for (let j = bombRow - 1; j <= bombRow + 1; j++) {
                for (let k = bombCol - 1; k <= bombCol + 1; k++) {
                    if((j >= 0) && (k >= 0) && (j < hangarRows) && (k < hangarCols)){
                        matrix[j][k] -= bombValue;
                    }
                }
            }
            killedBunniesCounter++;
            snowballDamage += bombValue;
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0){
                snowballDamage += matrix[i][j];
                killedBunniesCounter++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(killedBunniesCounter);
}

solve(['5 10 15 20',
'10 10 10 10',
'10 15 10 10',
'10 10 10 10',
'2,2 0,1']
);