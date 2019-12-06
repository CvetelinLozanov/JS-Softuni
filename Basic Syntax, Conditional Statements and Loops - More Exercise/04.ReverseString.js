function solve(input){    
    let newString = "";
    for (let i = 0; i < input.length; i++) {
        newString += input[input.length - i - 1];        
    }
    console.log(newString);    
}



solve("Hello");