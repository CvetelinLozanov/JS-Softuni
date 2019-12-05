function solve(arr){
    let username = arr[0];
    for (let i = 1; i < arr.length; i++) {        
        if (username === reverseString(arr[i])) {
            console.log(`User ${username} logged in.`);            
        }else if (i === 4) {
            console.log(`User ${username} blocked!`);            
        }else{
            console.log("Incorrect password. Try again.");
            
        }   
    }
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);