function solve(arr){
    if (arr.length === 1) {
        console.log(0);
        return;
    }

    let resultIndex = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let leftSideSumArr = leftSideSum(arr, i);
        let rightSideSumArr = rightSideSum(arr, i);

        if (leftSideSumArr === rightSideSumArr) {
            resultIndex = i;
        }
    }

    if (resultIndex === 0) {
        console.log('no');
        return;
    }

    console.log(resultIndex);
}

function rightSideSum(arr, i){
    let sum = 0;
    for (let j = i + 1; j < arr.length; j++) {
        sum += arr[i];
    }

    return sum;
}

function leftSideSum(arr, i){
    let sum = 0;
    for (let j = 0; j < i; j++) {
        sum += arr[j];    
    }

    return sum;
}

solve([1, 2, 3, 3]);
