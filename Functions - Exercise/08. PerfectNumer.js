function solve(number){
    let arrayWithNumbers = [];
    for (let i = 1; i < number - 1; i++) {
        if(number % i === 0){
            arrayWithNumbers.push(i);
        }
    }

    let sum = sumOfPositiveDivisors(arrayWithNumbers);

    if(sum === number){
        console.log('We have a perfect number!');
    }else{
        console.log(`It's not so perfect.`);
    }

    function sumOfPositiveDivisors(arrayWithNumbers){
        let sum = 0;
        for (const num of arrayWithNumbers) {
            sum += num;
        }

        return sum;
    }
}

solve(1236498);