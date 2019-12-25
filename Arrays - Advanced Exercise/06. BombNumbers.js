function solve(fieldInput, bombInput){
    let bombNumber = bombInput[0];
    let bombPower = bombInput[1];
    let field = fieldInput;
    let leftBombSideIndex = 0;
    

    for (let i = 0; i < field.length; i++) {
        if(isABomb(bombNumber, field, i)){
            let indexOfBomb = field.indexOf(bombNumber);
            if(isInFieldFromLeftSide(indexOfBomb, bombPower)){               
               leftBombSideIndex = indexOfBomb - bombPower;
            }

            if(isInFieldFromRightSide(indexOfBomb, field, bombPower)){
                if(!isInFieldFromLeftSide(indexOfBomb, bombPower)){
                    field.splice(leftBombSideIndex, bombPower + 1);
                }else{
                    field.splice(leftBombSideIndex, bombPower * 2 + 1, 0);
                }                
                continue;
            }  

            field.splice(leftBombSideIndex)
        }
    }

    console.log(sumNumbers(field));

    function sumNumbers(arr){
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        return sum;
    }

    function isABomb(bombNumber, field, i){
        return bombNumber === field[i];
    }

    function isInFieldFromLeftSide(number, bombPower){
        return number - bombPower >= 0;    
    }

    function isInFieldFromRightSide(number, field, bombPower){
        return number + bombPower < field.length - 1;    
    }
}

solve([4, 3, 2, 2],[4, 2]);
    
