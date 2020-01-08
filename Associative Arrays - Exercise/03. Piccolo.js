function solve(input) {
    let parking = [];
    input
        .forEach(line => {
            const [direction, carNumber] = line.split(', ');
            if (direction === 'IN') {
                if (!parking.includes(carNumber)) {
                    parking.push(carNumber);
                }                
            } else {
                if (parking.includes(carNumber)) {
                    let index = parking.indexOf(carNumber);
                    parking.splice(index, 1); 
                }                
            }
        });

        parking = parking.sort((a, b) => a.localeCompare(b));

        console.log(parking.length === 0 ? 'Parking Lot is Empty' : parking.join('\n'));
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);