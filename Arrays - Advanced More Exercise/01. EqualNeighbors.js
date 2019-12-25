function solve(input){
    let counter = 0;

    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input[i].length; j++) {
            let firstNum = input[i][j];
            let secondNum = input[i + 1][j];
            if(firstNum === secondNum){
                counter++;                
            }            
        }        
    }

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length - 1; j++) {
            let firstNum = input[i][j];
            let secondNum = input[i][j + 1];
            if(firstNum === secondNum){
                counter++;                
            }            
        }        
    }
    console.log(counter);
}

solve([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]);