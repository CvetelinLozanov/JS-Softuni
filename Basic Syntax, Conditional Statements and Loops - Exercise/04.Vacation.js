function solve(people,groupType,dayOfWeek){
    let price;
    let totalSum;
    if (dayOfWeek === "Friday") {
        if (groupType === "Students") {
            price = 8.45;
        }else if (groupType === "Business") {
            price = 10.90;
        }else{
            price = 15;
        }
    }else if (dayOfWeek === "Saturday") {
        if (groupType === "Students") {
            price = 9.80;
        }else if (groupType === "Business") {
            price = 15.60;
        }else{
            price = 20;
        }
    }else if (dayOfWeek === "Sunday"){
        if (groupType === "Students") {
            price = 10.46;
        }else if (groupType === "Business") {
            price = 16;
        }else{
            price = 22.50;
        }
    }    

    totalSum = price * people;

    if (groupType === "Students" && people >= 30) {
        totalSum -= (totalSum * 0.15);
    }
    if (groupType === "Business" && people >= 100) {
        totalSum -= price * 10;
    }
    if (groupType === "Regular" && (people >= 10 && people <= 20)) {
        totalSum -= (totalSum * 0.05);
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);
    
}

solve(105,"Business", "Friday");