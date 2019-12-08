function solve(firstNumber , operand, secondNumber){
    let result = 0;
    
    switch (operand) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;        
    }        
    console.log(result.toFixed(2));
}

solve(5,'*',2)