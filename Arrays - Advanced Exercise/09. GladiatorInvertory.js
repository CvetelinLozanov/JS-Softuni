function solve(input){
    let equipment = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let commandArgs = input[i].split(' ');
        let command = commandArgs[0];
        let equip = commandArgs[1];
        if (command === 'Buy'){            
            if (!equipment.includes(equip)){
                equipment.push(equip); 
            }
        } else if (command === 'Trash'){
            let indexOfEquipmentForRemove = equipment.indexOf(equip);
            if (indexOfEquipmentForRemove !== -1){
                equipment.splice(indexOfEquipmentForRemove, 1);
            }
        } else if (command === 'Repair'){
            let indexOfEquipmentForRepair = equipment.indexOf(equip);
            let elementForRepair = '';
            if (indexOfEquipmentForRepair !== -1){
                elementForRepair = equipment.splice(indexOfEquipmentForRepair, 1)[0];
                equipment.push(elementForRepair);
            }
        } else if (command === 'Upgrade'){
            let equipmentArgs = equip.split('-');
            let equipmentForUpgrade  = equipmentArgs[0];
            let upgrade = equipmentArgs[1];
            let indexOfEquipmentForUpgrade = equipment.indexOf(equipmentForUpgrade);
            if (indexOfEquipmentForUpgrade !== -1){
                equipment.splice(indexOfEquipmentForUpgrade + 1, 0, equipmentForUpgrade + ':' + upgrade);
            }
        }
    }

    console.log(equipment.join(' '));
}

solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);