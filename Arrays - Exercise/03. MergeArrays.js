function solve(firstArray, secondArray){
    let resultArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            resultArray[i] = Number(firstArray[i]) + Number(secondArray[i]);
        }else{
            resultArray[i] = firstArray[i] + secondArray[i];
        }
    }

    console.log(resultArray.join(' - '));
}

solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);