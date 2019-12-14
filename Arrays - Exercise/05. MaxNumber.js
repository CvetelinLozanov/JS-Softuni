function solve(arr){
    let result = '';
    let biggestNum = 0;

    for (let i = 0; i < arr.length; i++) {
       for (let j = i; j < arr.length; j++) {
          if (arr[j] > biggestNum) {
              biggestNum = arr[j];              
          }
       }
       if (result.includes(biggestNum)) {
            biggestNum = 0;
            continue;
        }else{ 
            result += biggestNum + ' '; 
        }
       biggestNum = 0;
    }
    
    console.log(result);
}

solve([1, 4, 3, 2]);