function solve(sideA, sideB, sideC){
    let p = 0.5 * (sideA + sideB + sideC);
    let area = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC))
    console.log(area);
}

solve(2, 3.5, 4);