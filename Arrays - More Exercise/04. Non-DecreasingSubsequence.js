function solve(arr){
    let resultArray = [];
    let biggestNumber= 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= biggestNumber){
            biggestNumber = arr[i];
            resultArray.push(biggestNumber);
        }
    }

    console.log(resultArray.join(' '));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);