function solve(input) {
    const playerResults = {};
    const powers = {        
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    }
    const types = {
        S:4,
        H:3,
        D:2,
        C:1
    }
    
    for (const line of input) {        
        let [player, cardsArgs] = line.split(': ');
        let cards = cardsArgs.split(', ');
        let distinctCards = [...new Set(cards)]
        for (const card of distinctCards) {
            if (!playerResults.hasOwnProperty(player)) {
                playerResults[player] = [];
            }
            if (playerResults[player].includes(card)) {
                continue;
            }
            playerResults[player].push(card);
        }      
    } 
    
    for (const key in playerResults) {
        let cardSum = 0;
        for (const card of playerResults[key]) {
            let cardPower = 0;
            let typeOfCard = 0;
            if (card.match(/^\d/) && card.length != 3) {
                cardPower = Number(card[0]);  
                typeOfCard = types[card[1]]; 
            } else if (card.length === 3) {
                cardPower = 10;
                typeOfCard = types[card[2]]
            } else {
                cardPower = powers[card[0]];
                typeOfCard = types[card[1]];
            }  
            cardSum += cardPower * typeOfCard;                           
        }
        playerResults[key] = cardSum;

        console.log(`${key}: ${playerResults[key]}`);
    }
}

  
solve(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);