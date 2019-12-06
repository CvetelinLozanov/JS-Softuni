function solve(year, mounth, day){
    let mounthAndDate = (mounth + " " + day + " " + year).toString();
    let currentDay = new Date(mounthAndDate);
    let nextDay = new Date(currentDay);
    nextDay.setDate(currentDay.getDate() + 1)
    console.log(nextDay.getFullYear() + "-" + (nextDay.getMonth() + 1) + "-" + nextDay.getDate());    
}

solve(1,1,1);