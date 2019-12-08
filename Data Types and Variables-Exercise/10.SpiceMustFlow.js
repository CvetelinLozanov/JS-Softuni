function solve(startingYield){
    let days = 0;
    let total = 0;
    while (startingYield >= 100) {
        days++;
        total += startingYield - 26;
        startingYield -= 10;
    }
    if (startingYield > 26 && days > 0) {
        total -= 26;
    }
    console.log(days);
    console.log(total);
}

solve(111);