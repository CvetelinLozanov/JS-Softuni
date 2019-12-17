function solve(arr){
    let amountOfRotate = Number(arr.pop());      
    for (let i = 0; i < amountOfRotate; i++) {
        let lastElement = arr.pop();  
        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4', '2']);