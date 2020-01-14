function solve(input) {
    const companies = {};
    input
        .forEach((line) => {
            const [company, employeeId] = line.split(' -> ');
            if (!companies.hasOwnProperty(company)){
                companies[company] = [];
            }
           
            if (!companies[company].includes(employeeId)){
                companies[company].push(employeeId);
            }
        });

        const keys = Object.keys(companies)
            .sort((a, b) => a.localeCompare(b));

        for (const key of keys) {
            console.log(key);            
            for (const id of companies[key]) {
                console.log(`-- ${id}`);
            }
        }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);