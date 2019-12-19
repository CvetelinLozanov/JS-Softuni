function solve(firstNum, secondNum){
    
    let firstFactoriel = calculateFactoriel(firstNum);
    let secondFactoriel = calculateFactoriel(secondNum);
    let result = firstFactoriel / secondFactoriel;

    console.log(result.toFixed(2));

    function calculateFactoriel(n){
        if(n === 1){
            return 1;
        }
        return n * calculateFactoriel(n - 1);
    }
}

solve(5, 2)