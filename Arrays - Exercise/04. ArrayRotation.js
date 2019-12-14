function solve(arr, numberOfRotations){
    for (let i = 0; i < numberOfRotations; i++) {
        let firstElement = arr[0];
        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1]
        }
        arr[arr.length - 1] = firstElement;         
    }

    console.log(arr.join(' '));
}

solve([32, 21, 63, 1], 4);