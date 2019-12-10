function solve(firstNumber, secondNumber, thirdNumber){
    let maxVal = 0;
    if (firstNumber > secondNumber) {
       maxVal = firstNumber;
    }else{
       maxVal = secondNumber; 
    }

    if (thirdNumber > maxVal) {
        maxVal = thirdNumber;
    }

    console.log(maxVal);
}

solve(-2, 3, 7);

function biggestOfThreeNumbers(a, b, c){
    if (a > b) {
        if (a > c) {
           console.log(a); 
        }else{
            console.log(c);
        }
    }else{
        if (b > c) {
            console.log(b);
        }else{
            console.log(c);
        }
    }
}