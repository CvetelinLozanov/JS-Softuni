function solve(input) {
    const resources = {};    
    for (let i = 0; i < input.length; i+=2) {
        const resource = input[i];
        const quantity = Number(input[i + 1]);
        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = quantity;
            continue;
        }
        resources[resource] += quantity;
    }

    for (const key in resources) {
        console.log(`${key} -> ${resources[key]}`)
    }
}

solve(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']
    );
