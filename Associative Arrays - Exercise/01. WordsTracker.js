function solve(input) {
    const wordsToFind = input.shift().split(' ');
    const wordsOccurence = {};
    for (const word of wordsToFind) {
        wordsOccurence[word] = 0;
    }   
    
    for (const word of input) {
        if (wordsOccurence.hasOwnProperty(word)) {
            wordsOccurence[word]++;
        }
    }

    let sortedWords = Object.entries(wordsOccurence)
        .sort((a, b) => b[1] - a[1]);

    for (const word of sortedWords) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}

solve([
    'In this sentence',
     'In','this','In','In','In','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]);