function solve(arr){
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let bitcoinCounter = 0;
    let counter = 1;
    let totalMoney = 0;
    let bitcoinPurchaseDateCounter = 1;
    let bitcoinPurchaseDate = 0;    
    for (let i = 0; i < arr.length; i++) {
        if (counter % 3 == 0) {
            arr[i] -= arr[i] * 0.3;
        }        
        totalMoney += arr[i] * goldPrice;
        while(totalMoney >= bitcoinPrice) {
            totalMoney -= bitcoinPrice;
            bitcoinCounter++;
            if (bitcoinPurchaseDate === 0) {
                bitcoinPurchaseDate = bitcoinPurchaseDateCounter;
            }           
        }
        bitcoinPurchaseDateCounter++;
        counter++;
    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (bitcoinCounter != 0) {
        console.log(`Day of the first purchased bitcoin: ${bitcoinPurchaseDate}`);
    }    
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);        
}

solve([100,200,300]);