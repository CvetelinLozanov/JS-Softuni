function solve(radius, height){
    let volume = 0;
    let area = 0;
    volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;
    area = Math.PI * radius * (radius + Math.sqrt((Math.pow(radius,2) + Math.pow(height, 2))));
    console.log(`volume = ${volume.toFixed(4)}`);    
    console.log(`area = ${area.toFixed(4)}`);    
}

solve(3.3, 7.8);