function solve(input){
    let initialHealth = 100;
    let initialCoins = 0;
    let inputArgs = input[0].split('|');
    let roomCounter = 1;

   for (let i = 0; i < inputArgs.length; i++) {   
   
       let commandArgs = inputArgs[i].split(' ');
       let command = commandArgs[0].toLowerCase();

       switch (command) {
           case 'potion':
                let healthToAdd = Number(commandArgs[1]);
                    if(initialHealth + healthToAdd > 100){
                        healthToAdd = 100 - initialHealth;
                        initialHealth = 100;                                                
                    }else{
                        initialHealth += healthToAdd;                    
                    }
                    console.log(`You healed for ${healthToAdd} hp.`)
                    console.log(`Current health: ${initialHealth} hp.`);
               break;
            case 'chest':
                    let coinsToAdd = Number(commandArgs[1]);
                    initialCoins += coinsToAdd;
                    console.log(`You found ${coinsToAdd} coins.`);
                break;
           default:
                let monsterAttack = Number(commandArgs[1]);                
                initialHealth -= monsterAttack;
                if(initialHealth > 0){
                    console.log(`You slayed ${command}.`);
                }else{                    
					console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCounter}`);
                    return;
                }
               break;
       }

       roomCounter++;
   }
   
        console.log(`You've made it!`);
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);   
}

solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');