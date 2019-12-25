function solve(input){
    let resultArray = arrayUnique(input);

    console.log(resultArray.join(' '));

    function arrayUnique(arr){
        var resultArray = [];

        for (let i = 0; i < arr.length; i++) {
            const number = arr[i];
            if(resultArray.indexOf(number) === -1){
                resultArray.push(number);
            }            
        }

        return resultArray;
    }
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);