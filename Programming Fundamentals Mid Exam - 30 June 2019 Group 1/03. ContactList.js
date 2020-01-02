function solve(input) {
    let contacts = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let command = tokens[0];
        if (command === 'Add') {
            let contact = tokens[1];
            let index = Number(tokens[2]);
            if (!contacts.includes(contact)) {
                contacts.push(contact);
            }else{
                if (isValidIndex(index, contacts)) {
                    contacts.splice(index, 0, contact);
                }                
            }
        }else if (command === 'Remove') {
            let index = Number(tokens[1]);
            if (isValidIndex(index, contacts)) {
                contacts.splice(index, 1);
            }
        }else if (command === 'Export'){
            let startIndex = Number(tokens[1]);
            let count = Number(tokens[2]);
            printContactsFromIndex(contacts, startIndex, count);
        }else if (command === 'Print') {
            let subCommand = tokens[1];
            if (subCommand === 'Normal') {
                console.log(`Contacts: ${contacts.join(' ')}`);
            }else if (subCommand === 'Reversed') {
                contacts = reverseArray(contacts);
                console.log(`Contacts: ${contacts.join(' ')}`);
            }
        }
    }

    function reverseArray(array){        
        for (let i = 0; i < array.length / 2; i++) {
            let oldValue = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = oldValue;
        }

        return array;
    }

    function printContactsFromIndex(contacts, startIndex, count){
        let contactsForPrint = [...contacts];
        let indexAndCount = startIndex + count;
        if (!isValidIndex(indexAndCount, contacts)){
            contactsForPrint = contactsForPrint.slice(startIndex);
        }else{
            contactsForPrint = contactsForPrint.slice(startIndex, indexAndCount);
        }
     
        console.log(contactsForPrint.join(' '));
    }

    function isValidIndex(index, arr){
        return index >= 0 && index < arr.length;
    }
}

solve(['Zayn Katy Ariana Avril Nick Mikolas',
'Remove 3',
'Add Jacob 0',
'Add Ivan 0',
'Export 0 3',
'Export 3 8',
'Print Reversed']);