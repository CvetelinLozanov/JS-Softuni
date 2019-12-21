//66/100
function solve(arr){
    const transportMessage = 'Transporting and washing'; 
    let targetThickness = arr[0];
    let used = false;    

    for (let i = 1; i < arr.length; i++) {
        let thickness = arr[i];
        console.log(`Processing chunk ${thickness} microns`);
        if (thickness > targetThickness) {
            thickness = cut(thickness, targetThickness);        
            thickness = lap(thickness, targetThickness);       
            thickness = grind(thickness, targetThickness);        
            thickness = etch(thickness, targetThickness); 
        }
        
        if (thickness + 1  === targetThickness && used != true){
            thickness = xRay(thickness, targetThickness);
            used = true; 
        }

        if(thickness === targetThickness){
            console.log(`Finished crystal ${thickness} microns`);         
        }
    }   

    function xRay(thickness, targetThickness){
        let xRayCounter = 1;
        thickness += 1;
        if (counterChecker(xRayCounter)){
            console.log(`X-ray x${xRayCounter}`);
        }
        return thickness;
    }

    function etch(thickness, targetThickness){
        let etchCounter = 0;
        while(thickness > targetThickness){
            thickness -= 2;
            etchCounter++;
        }
        if (counterChecker(etchCounter)){
            console.log(`Etch x${etchCounter}`);
            thickness = transportAndWashing(thickness);
            console.log(transportMessage);
        }
        return thickness;
    }

    function cut(thickness, targetThickness){
        let cutCounter = 0;
        let bestThickness = thickness;
        while(((thickness /= 4) >= targetThickness)){
            bestThickness = thickness;
            cutCounter++;
        }
        if (counterChecker(cutCounter)){
            console.log(`Cut x${cutCounter}`);
            bestThickness = transportAndWashing(bestThickness);
            console.log(transportMessage);
        }
        return bestThickness; 
    }

    function lap(thickness, targetThickness){
        let lapCounter = 0;
        let bestThickness = thickness;
        while(((thickness -= thickness * 0.20) > targetThickness)){
            bestThickness = thickness;
            lapCounter++;
        }
        if (counterChecker(lapCounter)){
            bestThickness = transportAndWashing(bestThickness);
            console.log(`Lap x${lapCounter}`);
            console.log(transportMessage);
        }
        return bestThickness;
    }   

    function grind(thickness, targetThickness){
        let grindCounter = 0;   
        let bestThickness = thickness;     
        while(((thickness -= 20) > targetThickness)){
            grindCounter++;
            bestThickness = thickness;
        }
        if (counterChecker(grindCounter)) {
            console.log(`Grind x${grindCounter}`);
            bestThickness = transportAndWashing(bestThickness);
            console.log(transportMessage);
        }        
        return bestThickness;
    }

    function transportAndWashing(thickness){
        return Math.floor(thickness);
    }

    function counterChecker(counter){
        return counter > 0;
    }
}

solve([3123123131231231123, 50000]);