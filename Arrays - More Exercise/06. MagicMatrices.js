function solve(arr){
    let firstRowSum = 0;
    let sum = 0;
    let status = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === 0) {
                firstRowSum += arr[i][j];
                continue;
            }           
            sum += arr[i][j]; 
        }        
        if (firstRowSum === sum) {
            status = true;
            sum = 0;
        }else{
            status = false;
            sum = 0;
        }
    }

    console.log(status);
}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);