function solve(firstNumber, secondNumber, thirdNumber){
    let smallestNum = 0;
    if(checkSFormallestNumber(firstNumber, secondNumber)){
        smallestNum = firstNumber; 
    }else{
        smallestNum = secondNumber;
    }

    if(checkSFormallestNumber(thirdNumber, smallestNum)){
        smallestNum = thirdNumber;
    }

    console.log(smallestNum);

    function checkSFormallestNumber(firstNum, secondNum){
        return firstNum < secondNum;
    }
}

solve(4, 2, 1);