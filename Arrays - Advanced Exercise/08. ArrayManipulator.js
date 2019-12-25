function solve(numbers, commands){
    for (let i = 0; i < commands.length; i++) {
        let commandArgs = commands[i].split(' ');        
        let command = commandArgs[0];
        if (command === 'add'){
            let indexToAdd = Number(commandArgs[1]);
            let numberToAdd = Number(commandArgs[2]);
            numbers.splice(indexToAdd, 0, numberToAdd);
        } else if(command === 'addMany'){
            let indexToAdd = Number(commandArgs[1]);
            
            for (let i = 2; i < commandArgs.length; i++) {
                const num = Number(commandArgs[i]);
                numbers.splice(indexToAdd, 0, num);
                indexToAdd++;
            }  
        }else if (command === 'contains'){
            let specialNum = Number(commandArgs[1]);
            if (numbers.includes(specialNum)){
                let indexOfSepcialNum = numbers.indexOf(specialNum);
                console.log(indexOfSepcialNum);
            }else{
                console.log('-1');
            }
        }else if (command === 'shift'){
            let rotations = Number(commandArgs[1]); 
            shiftNumbers(numbers, rotations);
        }else if (command === 'remove'){
            let indexToRemove = Number(commandArgs[1]);
            numbers.splice(indexToRemove, 1)
        }else if (command === 'sumPairs'){
            let resultArray = [];
            for (let i = 0; i < numbers.length - 1; i+=2) {
                resultArray.push(numbers[i] + numbers[i + 1]);
            }
            if (numbers.length % 2 !== 0){
                resultArray.push(numbers[numbers.length - 1]);
            }
            numbers = [...resultArray];
        }   
        
        else if(command === 'print'){
            console.log(`[ ${numbers.join(', ')} ]`);
            return;
        }
    }

    function shiftNumbers(numbers, rotations){
        for (let i = 0; i < rotations; i++) {
            let firstNum = numbers.shift();
            numbers.push(firstNum);
        }
    }
}

solve([1, 2, 4, 5, 6, 7, 8],
    ['sumPairs', 'print']
    );
    