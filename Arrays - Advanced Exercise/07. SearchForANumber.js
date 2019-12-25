function solve(arr1, arr2){
    let elementsToTake = arr2.shift();
    let elementsToDelete = arr2.shift();
    let specialNum = arr2.shift();

    let arrayAfterFirstOperation = arr1.slice(0, elementsToTake);
    let arrayAfterDelete = arrayAfterFirstOperation.slice(elementsToDelete);

    let specialNumCounter = 0;
    for (let i = 0; i < arrayAfterDelete.length; i++) {
        const element = arrayAfterDelete[i];
        if(element === specialNum){
            specialNumCounter++;
        }
    }

    console.log(`Number ${specialNum} occurs ${specialNumCounter} times.`);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);