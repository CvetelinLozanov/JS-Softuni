function solve(age){
    if (age >= 0 && age < 3) {
        console.log("baby");
        
    }else if (age >= 3 && age < 14) {
        console.log("child");
        
    }else if (age >= 14 && age < 20) {
        console.log("teenager");
        
    }else if (age >= 20 && age < 66) {
        console.log("adult");
        
    }else{
        console.log("elder");
        
    }
}

solve(100);