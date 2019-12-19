function solve(num){
    let percents = '%'.repeat(num / 10);
    let dots = '.'.repeat(10 - num / 10);
    if(num === 100){
        console.log('100% Complete!');
        console.log(`[${percents}${dots}]`);
    }else{
        console.log(`${num}% [${percents}${dots}]`);
        console.log('Still loading...');        
    }
}

solve(50)