function solve(input){
    let heroes = [];

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' / ');
        let heroName = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens.slice(2)[0].split(', ');       
        
        heroes.push({Hero: heroName, level, items});        
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        let entries = Object.entries(hero);

        let items = entries[2][1].sort((a,b) => a.localeCompare(b));
        console.log(`${entries[0][0]}: ${entries[0][1]}`);
        console.log(`${entries[1][0]} => ${entries[1][1]}`);
        console.log(`${entries[2][0]} => ${items.join(', ')}`);
    }
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);