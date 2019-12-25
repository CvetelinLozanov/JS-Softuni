function solve(input){

    let sortedArray = sortArray(input);
    let resultArray = [];
    let biggerNumsCounter = 0;
    let smallerNumsCounter = 0;

    for (let i = 1; i <= sortedArray.length; i++) {
        if(!(i % 2 === 0)){
            resultArray.push(sortedArray[sortedArray.length - 1 - biggerNumsCounter]);
            biggerNumsCounter++;
        }else{
            resultArray.push(sortedArray[smallerNumsCounter]);
            smallerNumsCounter++;
        }
    }

    console.log(resultArray.join(' '));

    function sortArray(arr){
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if(arr[i] > arr[j]){
                    let oldValue = arr[i];
                    arr[i] = arr[j];
                    arr[j] = oldValue;
                }
            }
        }

        return arr;
    }    
}

solve([1, 21, 3, 52, 69, 63, 2, 18, 94])