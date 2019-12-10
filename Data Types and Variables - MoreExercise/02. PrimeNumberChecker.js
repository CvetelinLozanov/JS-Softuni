function solve(number){
    let result = true;
    if (number % 2 == 0 || number % 3 == 0) {
        result = false;
    }
    if (number == 2 || number == 3) {
        result = true;
    }

    console.log(result);    
}

solve(7);