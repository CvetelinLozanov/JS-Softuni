function solve(arr){
    let carCleanStatus = 0;    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'soap') {
            carCleanStatus += 10;
        }else if(arr[i] === 'water'){   
            carCleanStatus *= 1.20;
        }else if(arr[i] === 'vacuum cleaner'){
            carCleanStatus *= 1.25;
        }else{
            carCleanStatus *= 0.90;
        }
    }

    console.log(`The car is ${carCleanStatus.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);