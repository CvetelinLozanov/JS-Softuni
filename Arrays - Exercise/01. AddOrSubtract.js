function solve(arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArray[i] = arr[i] + i;
        }else{
            newArray[i] = arr[i] - i;
        }
    }

    let oldArraySum = 0;
    let newArraySum = 0;

    for (let i = 0; i < arr.length; i++) {
        oldArraySum += arr[i];
        newArraySum += newArray[i];
    }

    console.log(newArray);
    console.log(oldArraySum);
    console.log(newArraySum);
}

solve([5, 15, 23, 56, 35]);