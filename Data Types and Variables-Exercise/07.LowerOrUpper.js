function solve(letter){
    let number = letter.charCodeAt(letter);    
    let result = number >= 65 && number <= 90 ? 'upper-case' : 'lower-case';
    console.log(result);       
}

solve('l');