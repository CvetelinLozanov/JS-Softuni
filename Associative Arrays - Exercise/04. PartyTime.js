function solve(input) {
    const vips = [];
    const regulars = [];
    const peopleWhoDidntCome = [];

    let index = 0;

    for (let i = 0; i < input.length; i++) {
        const command = input[i];
        if (command === 'PARTY') {
            index = i;
            break;
        }
        if (command.match(/^\d/)) {              
            vips.push(command);         
        } else {           
            regulars.push(command);
        }
    }    

    for (let i = index + 1; i < input.length; i++) {
        const guest = input[i];
        if (vips.includes(guest)) {
            let indexOfGuest = vips.indexOf(guest);
            if (index > -1) {
                vips.splice(indexOfGuest, 1);
            }           
        } 
        if (regulars.includes(guest)) {
            let indexOfGuest = regulars.indexOf(guest);
            if (index > -1) {
                regulars.splice(indexOfGuest, 1);
            }     
        }
    }

    console.log(vips.length + regulars.length);
    if (vips.length > 0) {
        console.log(vips.join('\n'));
    }
    if (regulars.length > 0) {
        console.log(regulars.join('\n'));
    }    
}

solve(['m8rfQBvl',
'm8rfQBvl',
'm8rfQBvl',
'PARTY',
'm8rfQBvl']);