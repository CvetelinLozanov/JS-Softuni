function solve(startIndex, endIndex){
    let sum = 0;
    let result = '';
    for (let i = startIndex; i <= endIndex; i++){
        sum += i;
        result += i + " ";        
    }
    console.log(result);
    console.log(`Sum: ${sum}`);        
}

solve(5,10);