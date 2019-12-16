function solve(input){
    let fieldLength = Number(input[0]);
    let field = initialField(fieldLength);
    let ladybugsInitialIndexes = input[1];
    let ladybugsField = initialLadybugsField(ladybugsInitialIndexes, field);    
    
    for (let i = 2; i < input.length; i++) {
        let commandArgs = input[i].split(' ');
        let ladyBugIndex = Number(commandArgs[0]);
        if (rangeCheck(ladyBugIndex, fieldLength)) {
            continue;
        }

        if (checkForLadybugIndex(ladyBugIndex, field)) {
            continue;
        }

        let command = commandArgs[1];
        let increment = Number(commandArgs[2]);
        if (command === 'right') {   
           for (let j = ladyBugIndex; j < fieldLength; j += increment) {
               if (rangeCheck(j + increment, fieldLength)) {
                   ladybugsField[ladyBugIndex] = 0;
                   break;
               }

               if (ladybugsField[j + increment] === 1) {
                   continue;
               }else{
                    ladybugsField[j + increment] = 1;
                    ladybugsField[ladyBugIndex] = 0;
                    break;
               }
           }
        }else if (command = 'left') {
            for (let j = ladyBugIndex; j >= 0; j -= increment) {
                if (rangeCheck(j - increment, fieldLength)) {
                    ladybugsField[ladyBugIndex] = 0;
                    break;
                }
 
                if (ladybugsField[j - increment] === 1) {
                    continue;
                }else{
                     ladybugsField[j - increment] = 1;
                     ladybugsField[ladyBugIndex] = 0;
                     break;
                }
            }
        }
    }

    console.log(ladybugsField.join(' '));
}

function checkForLadybugIndex(ladyBugIndex, field){
    return field[ladyBugIndex] === 0;
}

function initialLadybugsField(ladybugsInitialIndexes, field){
    let ladybugsIndexes = ladybugsInitialIndexes.split(' ');
    for (let i = 0; i < ladybugsIndexes.length; i++) {
        let index = ladybugsIndexes[i];
        if (rangeCheck(index, field.length)) {
            continue;
        }
        field[index] = 1;
    }

    return field;
}

function rangeCheck(index, fieldLength){
    return index < 0 || index >= fieldLength;
}

function initialField(fieldLength, ladybugsInitialIndexes){
    let field = []; 
    for (let i = 0; i < fieldLength; i++) {
        field[i] = 0;
    }

    return field;
}

solve([ 5, '3',
'3 left 2',
'1 left -2']
);