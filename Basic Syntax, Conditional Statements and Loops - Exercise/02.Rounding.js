function solve(num, round){
    if (round > 15) {
        round = 15
    }
    num *= Math.pow(10, round);
    num = Math.round(num);
    num /= Math.pow(10, round);
    console.log(num);    
}

solve(3.1415926535897932384626433832795,2);