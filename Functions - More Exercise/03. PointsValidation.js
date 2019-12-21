function solve(arr){
    let x1 = arr[0];
    let x2 = arr[2];
    let y1 = arr[1];
    let y2 = arr[3];
    let firstDistance = getDistanceBetweenPoints(x1, y1, 0, 0);
    let secondDistance = getDistanceBetweenPoints(x2, y2, 0, 0);
    let thirdDistance = getDistanceBetweenPoints(x1, y1, x2, y2);

    printResult(firstDistance, x1, y1, 0, 0);
    printResult(secondDistance, x2, y2, 0, 0);
    printResult(thirdDistance, x1, y1, x2, y2);

    function getDistanceBetweenPoints(x1, y1, x2, y2){
        return Math.sqrt((Math.pow(x2-x1, 2) + Math.pow(y2-y1,2)));
    }

    function isInt(number){
        return number % 1 === 0;
    }

    function printResult(distance, x1, y1, x2, y2){
        if (isInt(distance)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}

solve([2, 1, 1, 1]);