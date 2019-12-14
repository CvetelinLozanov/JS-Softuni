function solve(arr, magicNumber){
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === magicNumber) {
                result += arr[i] + ' ' + arr[j] + '\n';
            }
        }        
    }

    console.log(result);
}

solve([14, 20, 60, 13, 7, 19, 8], 27);