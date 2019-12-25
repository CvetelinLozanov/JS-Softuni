function solve(arr){
    let sortedArray = arr.sort(sortNames);
    

    //sortedArray = sortedArray.sort((a, b) => );

    console.log(sortedArray.join('\n'));

    function sortNames(a, b){
        let result = a.length - b.length

        if(result === 0){
            return a.localeCompare(b);
        }

        return result;
    }
}

solve(["test", "Deny", "omen", "Default"])