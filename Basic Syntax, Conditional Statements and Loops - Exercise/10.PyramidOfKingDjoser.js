function solve(base, increment){
    let index = 2;
    let area = base;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let totalGold = 0;
    let counter = 1;
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let heightCounter = 1;

    if (base % 2 != 0) {
        index = 1;
    }

    for (i = base; i > 2; i-=2) {
        area = i;
        marble = area * 4 - 4;
        stone = area * area - marble;

        totalStone += stone;

        if (heightCounter % 5 == 0) {          
            totalLapis += marble;
        }else{
        totalMarble += marble;
        }
        heightCounter++;       
    }

    let gold = i === 1 ? 1 : 4;
    totalLapis = Math.ceil(totalLapis * increment);
    totalStone = Math.ceil(totalStone * increment);
    totalMarble = Math.ceil(totalMarble * increment);
    totalGold = Math.ceil(gold * increment);
    totalHeight = Math.floor(heightCounter * increment);

    let result = `Stone required: ${totalStone}\n` +
        `Marble required: ${totalMarble}\n` +
        `Lapis Lazuli required: ${totalLapis}\n` +
        `Gold required: ${totalGold}\n` +
        `Final pyramid height: ${totalHeight}`;

    return result;
} 