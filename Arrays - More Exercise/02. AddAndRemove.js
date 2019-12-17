function solve(arr){
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === 'add') {
            resultArray.push(i + 1);
        }else{
            resultArray.pop();
        }
    }

    if (resultArray.length === 0) {
        console.log('Empty');
    }else{
        console.log(resultArray.join(' '));
    }
}

solve(['remove', 'remove', 'remove']);