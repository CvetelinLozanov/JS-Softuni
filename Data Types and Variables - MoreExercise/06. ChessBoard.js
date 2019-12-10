function solve(n){
    let value = '';1
    console.log('<div class="chessboard">')
    for(let i = 0; i < n; i++){
        console.log('   <div>')
        for(let j = i; j < i + n; j++){
            if(j % 2 == 0){
                value = 'black';
            }else{
                value = 'white';
            }     
            console.log(`       <span class="${value}"></span>`)       
        }        
        console.log('   </div>');
    }
    console.log('</div>');
}

solve(3);