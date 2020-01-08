function solve(input) {
    const words = {};
    const tokens = input.split(' ');

    for (const word of tokens) {
        const wordInLowerCase = word.toLowerCase();
        if (!words.hasOwnProperty(wordInLowerCase)) {
            words[wordInLowerCase] = 1;
            continue;
        }
        words[wordInLowerCase]++;
    }

    const entries = Object.entries(words);

    const filteredWords = entries.filter(w => w[1] % 2 === 1)
        .forEach(w => console.log(w[0]));

  //  console.log(filteredWords.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');