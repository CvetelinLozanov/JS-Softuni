function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let helmetBrokenCounter = 0;
    let swordBrokenCounter = 0;
    let shieldBrokenCounter = 0;    
    let finalHelmetCounter = 0;
    let finalSwordCounter = 0;
    let finalShieldCounter = 0;
    let finalArmorCounter = 0;
    while (lostFights > 0) {
        helmetBrokenCounter++;
        swordBrokenCounter++;
        shieldBrokenCounter++;        
        if (helmetBrokenCounter === 2) {
            finalHelmetCounter++;
            helmetBrokenCounter = 0;
        }if (swordBrokenCounter === 3) {
            finalSwordCounter++;
            swordBrokenCounter = 0;
        }if (shieldBrokenCounter === 6){
            finalShieldCounter++;            
        }if (shieldBrokenCounter === 12) {
            finalShieldCounter++;
            finalArmorCounter++;
            shieldBrokenCounter = 0;
        }
        lostFights--;
    }

    let result = finalHelmetCounter * helmetPrice + finalSwordCounter * swordPrice + finalShieldCounter * shieldPrice + finalArmorCounter * armorPrice;

    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);    
}

solve(23,12.50,21.50,40,200);