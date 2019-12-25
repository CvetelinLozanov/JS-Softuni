function solve(input){
    let guests = [];
    for (let i = 0; i < input.length; i++) {
        let commandArgs = input[i].split(' ');
        if(commandArgs.length === 3){
            let guestName = commandArgs[0];
            if(!guests.includes(guestName)){
                guests.push(guestName);
            }else{
                console.log(`${guestName} is already in the list!`);
            }
        }else{
            let guestName = commandArgs[0];
            if(guests.includes(guestName)){
                guests.pop(guestName);
            }else{
                console.log(`${guestName} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'));
}

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);