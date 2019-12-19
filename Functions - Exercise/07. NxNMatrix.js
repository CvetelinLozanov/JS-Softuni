function solve(n){
    printMatrix(n);

    function printMatrix(n){
        printRows(n);
    }

    function printRows(n){
        for (let i = 0; i < n; i++) {
            printColums(i, n);
        }
    }

    function printColums(j, n){
        let result = '';
        for (let i = 0; i < n; i++) {
            result += n + ' '                            
        }
        console.log(result);
    }
}

solve(7);