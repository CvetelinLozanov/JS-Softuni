function solve(input){
    // class Employee{
    //     constructor (firstName, lastName, personalId){
    //         this.firstName = firstName,
    //         this.lastName = lastName,
    //         this.personalId = personalId
    //     }       
    // }

    for (let i = 0; i < input.length; i++) {
        let nameLength = input[i].length;
        let nameArgs = input[i].split(' ');
        let firstName = nameArgs[0];
        let lastName = nameArgs[1];
        let employee = {
            firstName,
            lastName,
            nameLength
        }

        let entries = Object.entries(employee);

        if(lastName === undefined){
            console.log(`Name: ${entries[0][1] === undefined ? '' : entries[0][1]} -- Personal Number: ${entries[2][1] === undefined ? '' : entries[2][1]}`);       
        }else{
            console.log(`Name: ${entries[0][1] === undefined ? '' : entries[0][1]} ${entries[1][1] === undefined ? '' : entries[1][1]} -- Personal Number: ${entries[2][1] === undefined ? '' : entries[2][1]}`);       
        }
    }    
}

solve([
    'Silas',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

    // for (let i = 0; i < input.length; i++) {
    //     Object
    //     .entries(result[i])
    //     .forEach(tuple => console.log(tuple.join(': ')))   
    // }