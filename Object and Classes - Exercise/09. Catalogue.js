function solve(input){
    let products = {};

    for (let i = 0; i < input.length; i++) {
        let productArgs = input[i].split(' : ');
        let product = productArgs[0];
        let price = productArgs[1];
        products[product] = price;
    }

    let sortedItems = Object.keys(products)
        .sort((a, b) => a.localeCompare(b));

    for (let i = 65; i <= 97; i++) {
        let char = String.fromCharCode(i);
        for (const product of sortedItems) {            
            if (product.startsWith(char)) {
                console.log(char);
                for (const prod of sortedItems) {
                    if (prod.startsWith(char)) {
                        console.log(`  ${prod}: ${products[prod]}`);
                    }
                }
                break;
            }
        }
    }    
}   

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);