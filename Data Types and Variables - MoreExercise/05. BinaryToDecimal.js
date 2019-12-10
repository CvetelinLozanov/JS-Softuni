function solve(binaryNumber){
    let number = 0;
    let result = 0;
    let counter = 0; 
    let length = binaryNumber.length;  
    while (counter < length) {
        number = parseInt(binaryNumber) % 10;
        result += parseInt(number * Math.pow(2, counter));
        binaryNumber /= 10;
        counter++;
    }
    console.log(result);
}

solve('11110000');