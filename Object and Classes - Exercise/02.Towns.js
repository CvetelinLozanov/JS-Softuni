function solve(input){
    for (let i = 0; i < input.length; i++) {
        let townArgs = input[i].split('|');
        let town = townArgs[0].trim();
        let latitude = Number(townArgs[1]).toFixed(2);
        let longitude = Number(townArgs[2]).toFixed(2);
        let townInfo = {
            town,
            latitude,
            longitude
        }

        console.log(townInfo);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);