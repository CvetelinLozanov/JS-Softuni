function solve(num){    
    let result = '';    
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            result += i + " ";                   
        }     
        result.trim();   
        result += '\n';
    }
    console.log(result);    
}

solve(3);