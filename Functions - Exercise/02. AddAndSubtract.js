function solve(firstNumber, secondNumber, thirdNumber){
    let result = 0;
    let sum =  (firstNum, secondNum) => firstNum + secondNum;
    result = sum(firstNumber, secondNumber);
    let subtract = (sum, thirdNumber) => sum - thirdNumber;
    result = subtract(result, thirdNumber);

    console.log(result);
}

solve(23, 6, 10);