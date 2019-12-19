function solve(arr){
    let numToString = '';
    for (let i = 0; i < arr.length; i++) {
        numToString = arr[i].toString();
        if(isPalindrome(numToString)){
            console.log('true');
        }else{
            console.log('false');
        }
    }

    function isPalindrome(num){   
        let isPalindrom = false;     
        for (let i = 0; i < num.length; i++) {
            if(num[i] === num[num.length - 1 - i]){
                isPalindrom = true;
            }else{
                isPalindrom = false;
            }
        }

        return isPalindrom;
    }
}

solve([32,2,22322,1010]);
