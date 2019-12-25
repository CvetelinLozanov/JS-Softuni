function solve(input){
    let wagons = input[0].split(' ').map(x => Number(x));
    let wagonMaxCapacity = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let command = input[i].split(' ');
        
        if(command.length > 1){
            wagons.push(Number(command[1]));
        }else{
            for (let j = 0; j < wagons.length; j++) {
                let passagers = Number(command[0]);
                if(wagons[j] + passagers <= wagonMaxCapacity){
                    wagons[j] += passagers;
                    break;
                }                
            }
        }
    }

    console.log(wagons.join(' '));
}

solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);
