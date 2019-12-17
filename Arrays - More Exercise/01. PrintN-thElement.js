function solve(arr){
    let step = arr[arr.length - 1];
    let resultArr = [];
    for (let i = 0; i < arr.length - 1; i += Number(step)) {
        resultArr.push(arr[i]);
    }
    console.log(resultArr.join(' '));
}

solve(['1', '2', '3', '4', '5', '6']);