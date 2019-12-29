function solve(curStock, orderedStock){

    let products = {};

    for (let i = 0; i < curStock.length; i+=2) {
        let stock = curStock[i];
        let quantity = Number(curStock[i + 1]);
        
        products[stock] = quantity
    }    

    for (let i = 0; i < orderedStock.length; i+=2) {
        let prodName = orderedStock[i];
        let quantity = Number(orderedStock[i + 1]);
        if(products.hasOwnProperty(prodName)){
            products[prodName] += quantity;
        }else{
            products[prodName] = quantity;
        }
    }

    for (const prod in products) {
        console.log(`${prod} -> ${products[prod]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );