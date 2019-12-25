function solve(input){
    let numbers = [];
    for (let i = 0; i < input.length; i++){
        if (input[i] === '*'){
            if(!checkNumbersCount(numbers)){
                console.log('Error: not enough operands!');
                return;
            }
            let secondNumber = numbers.pop();
            let firstNumber = numbers.pop();
            let result = firstNumber * secondNumber;
            numbers.push(result);
        }else if(input[i] === '+'){
            if(!checkNumbersCount(numbers)){
                console.log('Error: not enough operands!');
                return;
            }
            let secondNumber = numbers.pop();
            let firstNumber = numbers.pop();
            let result = firstNumber + secondNumber;
            numbers.push(result);
        }else if(input[i] === '-'){
            if(!checkNumbersCount(numbers)){
                console.log('Error: not enough operands!');
                return;
            }
            let secondNumber = numbers.pop();
            let firstNumber = numbers.pop();
            let result = firstNumber - secondNumber;
            numbers.push(result);
        }else if (input[i] === '/'){
            if(!checkNumbersCount(numbers)){
                console.log('Error: not enough operands!');
                return;
            }
            let secondNumber = numbers.pop();
            let firstNumber = numbers.pop();
            let result = firstNumber / secondNumber;
            numbers.push(result);
        }else{
            numbers.push(Number(input[i]));
        }
    }

    if (numbers.length > 1){
        console.log('Error: too many operands!');
    }else{
        console.log(numbers[0]);
    }

    function checkNumbersCount(numbers){
        return numbers.length >= 2;
    }
}

solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
   );