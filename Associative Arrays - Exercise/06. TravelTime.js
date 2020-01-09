function solve(input) {
    let countries = {};
    for (const line of input) {
        let [country, city, travelCost] = line.split(' > ');
        if (!countries.hasOwnProperty(country)) { 
            countries[country] = {};
        }
        if (!countries[country].hasOwnProperty(city)){
            countries[country][city] = travelCost;
        } else {
            let currentCost = countries[country][city];
            if (travelCost < currentCost) {
                countries[country][city] = travelCost;
            }
        }         
    }

    let result = '';

    let sortedCountries = Object.keys(countries)
        .sort((a, b) => a.localeCompare(b));
        sortedCountries
            .forEach((country) => {  
                result += `${country} -> `;                              
                let sortedTowns = Object.entries(countries[country])
                    .sort((a, b) => a[1] - b[1]);
                for (let i = 0; i < sortedTowns.length; i++) {
                    result += `${sortedTowns[i][0]} -> ${sortedTowns[i][1]} `;
                }
                result.trim();
                result += '\n';
        })

        console.log(result); 
}

solve(["Bulgaria > Sopot > 800",
    "Bulgaria > Sofia > 500",   
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);