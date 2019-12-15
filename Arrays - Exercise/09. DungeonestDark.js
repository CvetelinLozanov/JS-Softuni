function solve(input){
    let initialHealth = 100;
    let initialCoins = 0;
    let inputArgs = input.split('|');
    let roomCounter = 1;

   for (let i = 0; i < inputArgs.length; i++) {
       
        if(initialHealth <= 0){        
            break;
        }

       let commandArgs = inputArgs[i].split(' ');
       let command = commandArgs[0].toLowerCase();

       switch (command) {
           case 'potion':
                let healthToAdd = Number(commandArgs[1]);
                    if(initialHealth + healthToAdd >= 100){
                        let neededHealth = 100 - initialHealth;
                        let healthDiff = healthToAdd - neededHealth;
                        healthToAdd -= healthDiff;
                        initialHealth += healthToAdd;                                                
                    }else{
                        initialHealth += healthToAdd;                    
                    }
                    console.log(`You healed for ${healthToAdd} hp.`)
                    console.log(`Current health: ${initialHealth}hp.`);
               break;
            case 'chest':
                    let coinsToAdd = Number(commandArgs[1]);
                    initialCoins += coinsToAdd;
                    console.log(`You found ${coinsToAdd} coins.`);
                break;
           default:
                let monsterAttack = Number(commandArgs[1]);                
                initialHealth -= monsterAttack;
                if(initialHealth <= 0){
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCounter}`);
                    break;
                }else{
                    console.log(`You slayed ${command}.`);
                }
               break;
       }

       roomCounter++;
   }

   if(initialHealth > 0){
        console.log(`You've made it!`);
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
   }
}

solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');