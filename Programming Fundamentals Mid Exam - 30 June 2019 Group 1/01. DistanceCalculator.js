function solve(input) {
    let steps = Number(input[0]);
    let lengthOfStep = Number(input[1]);
    let distanceToTravel = Number(input[2]);
    let distanceInCm = 0;
    let stepCounter = 1;

    for (let i = 0; i < steps; i++) {
        if (stepCounter === 5){
            distanceInCm += lengthOfStep * 0.70;
            stepCounter = 1;      
            continue;                  
        }   
        distanceInCm += lengthOfStep;   
        stepCounter++;
    }

    let distanceInMeters = distanceInCm / 100;
    let totalPercentage = ((distanceInMeters / distanceToTravel) * 100).toFixed(2);

     console.log(`You travelled ${totalPercentage}% of the distance!`);
    
}

solve(['5000', '7.5', '500']);
