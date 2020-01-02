function solve(input) {
    let sideSize = Number(input[0]);
    let sheetsNumber = Number(input[1]);
    let sheetArea = Number(input[2]);
    let boxArea = Math.pow(sideSize, 2) * 6;
    let coveredArea = 0;
    let sheetCounter = 1;

    for (let i = 0; i < sheetsNumber; i++) {
        if (sheetCounter === 3) {
            coveredArea += sheetArea * 0.25;
            sheetCounter = 1;
            continue;
        }

        coveredArea += sheetArea;
        sheetCounter++;
    }

    console.log(`You can cover ${((coveredArea / boxArea) * 100).toFixed(2)}% of the box.`);
}

solve(['2.5', '32', '4.25']);