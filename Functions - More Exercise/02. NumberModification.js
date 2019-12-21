function solve(number){
    number = number.toString();
    checkAverage(number);

    function checkAverage(number){
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
            let digit = Number(number[i]);
            sum += digit;

            if (checkSum(sum, number)) {
                console.log(number);
                break;
            }else if (!checkSum(sum, number) && i > number.length - 2){
                number += '9';
            }
        }
    }

    function checkSum(sum, number){
        return sum / number.length >= 5; 
    }
}

solve(5835);