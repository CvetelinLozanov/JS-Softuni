function solve(input) {
    let frogs = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let command = tokens[0];

        if (command === 'Join') {
            let frogName = tokens[1];
            if (!frogs.includes(frogName)) {
                frogs.push(frogName);
            }
        }else if (command === 'Jump') {
            let frogName = tokens[1];
            let index = Number(tokens[2]);
            if (isValidIndexForJump(index, frogs)) {
                frogs.splice(index, 0, frogName);
            }
        }else if (command === 'Dive') {
            let index = Number(tokens[1]);
            if (isValidIndexForDelete(index, frogs)) {
                frogs.splice(index, 1);
            }
        }else if (command === 'First') {
            let count = Number(tokens[1]);
            if (count > frogs.length - 1) {
                console.log(frogs.join(' '));
            } else {
                let firstFrogs = frogs.slice(0, count);
                console.log(firstFrogs.join(' '));
            }
        } else if (command === 'Last') {
            let count = frogs.length - Number(tokens[1]);
            if (count <= 0) {
                console.log(frogs.join(' '));
            } else {
                let lastFrogs = frogs.slice(count);
                console.log(lastFrogs.join(' '));
            }
        } else if (command === 'Print') {
            let subCommand = tokens[1];
            if (subCommand === 'Normal') {
                console.log(`Frogs: ${frogs.join(' ')}`);
            }else if (subCommand === 'Reversed') {
                frogs = reversedArray(frogs);
                console.log(`Frogs: ${frogs.join(' ')}`);
            }
        }
    }

    function reversedArray(array){
        for (let i = 0; i < array.length / 2; i++) {
            const oldValue = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = oldValue;
        }

        return array;
    }

    function isValidIndexForDelete(index, array) {
        return index >= 0 && index < array.length;
    }

    function isValidIndexForJump(index, array){
        return index >= 0 && index <= array.length;
    }
}

solve(['Blake Muggy Kishko',
    'Join Kvachko',
    'Dive 0',
    'First 10',
    'Print Reversed']);