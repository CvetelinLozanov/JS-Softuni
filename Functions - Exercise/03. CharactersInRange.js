function solve(firstLetter, secondLetter){
    let firstCharToInt = firstLetter.charCodeAt(0);
    let secondCharToInt = secondLetter.charCodeAt(0); 
    let biggerValue = Math.max(firstCharToInt, secondCharToInt);
    let smallerValue = Math.min(firstCharToInt, secondCharToInt);    
    
    let result = getResultStringWithCharacters(biggerValue, smallerValue);
    
    console.log(result);

    function getResultStringWithCharacters(biggerValue, smallerValue){
        let result = '';
        for (let i = smallerValue + 1; i < biggerValue; i++) {
            result += String.fromCharCode(i) + ' ';
        }

        return result;
    }
}

solve('#', ':');