function solve(year){
    let isLeap;
    if (year % 4 == 0) {
        isLeap = true;
        if (year % 100 == 0) {
            isLeap = false;
        }if (year % 400 == 0) {
            isLeap = true;
        }
    }else if (year % 400 == 0) {
        isLeap = true;
    }else{
        isLeap = false;
    }

    if (isLeap) {
        console.log("yes");        
    }else{
        console.log("no");        
    }
}

solve(1900);