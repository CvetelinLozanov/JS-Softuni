function solve(input) {
    const materials = {
        fragments:0,
        motes:0,
        shards:0
    };
    const trashes = {};
    let result = '';    
    
    const tokens = input.split(' ');

        for (let i = 0; i < tokens.length; i+=2) {
            const value = +tokens[i];
            const material = tokens[i + 1].toLowerCase();
            if (material === 'motes' || material === 'shards' || material === 'fragments') {            
                    materials[material] += value;                   
            } else {
                if (!trashes.hasOwnProperty(material)) {
                    trashes[material] = value;
                } else {
                    trashes[material] += value;
                }
            }                
            
            if (materials[material] >= 250) {
                if (material === 'shards') {
                    result = 'Shadowmourne obtained!';
                    materials[material] -= 250;                    
                    break;
                } else if (material === 'fragments') {
                    result = 'Valanyr obtained!';
                    materials[material] -= 250;                    
                    break;
                } else if (material === 'motes') {
                    result = 'Dragonwrath obtained!';
                    materials[material] -= 250;                   
                    break;
                }
            }
        } 
            
    
        let sortedMaterials = Object.entries(materials)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        let sortedTrash = Object.keys(trashes)
            .sort((a, b) => a.localeCompare(b));
        
        console.log(result);
        for (const [k, v] of sortedMaterials) {
            console.log(`${k}: ${v}`);
        }
        for (const trash of sortedTrash) {
            console.log(`${trash}: ${trashes[trash]}`);
        } 
       
}

solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');