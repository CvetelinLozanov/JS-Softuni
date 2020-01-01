function solve(input) {
    let text = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');  
        let command = tokens[0];
        if (command === 'Stop') {
            break;
        }else if (command === 'Swap') {
            let firstWord = tokens[1];
            let secondWord = tokens[2];
            if (text.includes(firstWord) && text.includes(secondWord)) {
                let indexOfFirstWord = getIndexOfWord(firstWord, text);
                let indexOfSecondWord = getIndexOfWord(secondWord, text);
                text[indexOfFirstWord] = secondWord;
                text[indexOfSecondWord] = firstWord;
            }
        }else if (command === 'Delete') {   
            let indexToDelete = Number(tokens[1]) + 1;       
            if (isValidIndex(indexToDelete, text)) {
                text.splice(indexToDelete, 1);
            }      
        }else if (command === 'Replace'){
            let firstWord = tokens[1];
            let secondWord = tokens[2];
            let secondWordIndex =  getIndexOfWord(secondWord, text);
            if (secondWordIndex > -1) {
                text[secondWordIndex] = firstWord;
            }
        }else if (command === 'Put') {
            let word = tokens[1]; 
            let indexForNewWord =  Number(tokens[2]) - 1;
            if (indexForNewWord > 0 && indexForNewWord <= text.length) {
                text.splice(indexForNewWord, 0, word);
            }
        }else if (command === 'Sort') {
            text.sort((a, b) => b.localeCompare(a));
        }
    }

    console.log(text.join(' '));
    
    function getIndexOfWord(word, text) {
        return text.indexOf(word);
    }   

    function isValidIndex(index, arr){
        return index >= 0 && index < arr.length;
    }
}

solve(['Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 8',
    'Put it 8',    
    'Stop']);