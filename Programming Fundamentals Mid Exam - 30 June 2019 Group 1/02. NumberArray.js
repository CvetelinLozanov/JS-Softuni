function solve(input) {
    let array = input.shift().split(' ').map(Number);
    let negativeSum = 0;
    let positiveSum = 0;
    let totalSum = 0;

    for (let i = 0; i < input.length; i++) {
        let commandArgs = input[i].split(' ');
        let command = commandArgs[0];
        if (command === 'Switch') {
            let index = Number(commandArgs[1]);            
            if (isValidIndex(index, array)) {
                array[index] *= -1;
            }
        }else if (command === 'Change') {
            let indexToReplace = Number(commandArgs[1]);
            let value = Number(commandArgs[2]);
            if (isValidIndex(indexToReplace, array)) {
                array[indexToReplace] = value;
            }
        }else if (command === 'Sum'){
            let subCommand = commandArgs[1];
            if (subCommand === 'Negative') {
                let arrayWithNegativeNums = array.filter(a => a < 0);               
                negativeSum = sum(arrayWithNegativeNums);
                console.log(negativeSum);
            }else if (subCommand === 'Positive') {
                let arrayWithPositiveNums = array.filter(a => a >= 0);
                positiveSum = sum(arrayWithPositiveNums);
                console.log(positiveSum);
            }else if (subCommand === 'All'){
                totalSum = sum(array);
                console.log(totalSum);
            }            
        }else if (command === 'End'){
            array = array.filter(a => a >= 0);
            console.log(array.join(' '));
        }
    }

    function isValidIndex(index, arr){
        return index >= 0 && index < arr.length;
    }

    function sum(arr){
        return arr.reduce((acc, el) => acc + el); 
    }
}

solve(['1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End']);