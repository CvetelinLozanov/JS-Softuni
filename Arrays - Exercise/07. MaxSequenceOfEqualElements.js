function solve(arr){
    let bestNumber = 0;
    let counter = 1;
    let bestSequence = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            counter++; 
        }else{
            counter = 1;
        }
        
        if (counter > bestSequence) {
            bestSequence = counter;
            bestNumber = arr[i];
        }        
    }

    let result = '';

    for (let i = 0; i < bestSequence; i++) {
        result += bestNumber + ' ';
    }

    console.log(result);
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);