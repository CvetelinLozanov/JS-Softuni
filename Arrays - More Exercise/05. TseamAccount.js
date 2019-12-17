function solve(input){  
        let peterGames = input[0].split(' ');
    for (let i = 1; i < input.length; i++) {
        let commandArgs = input[i].split(' ');
        let command = commandArgs[0];
        let game = commandArgs[1];
        if(command === 'Play!'){
            break;
        }
        if (command === 'Install') {
            if (peterGames.includes(game)) {
                continue;
            }
            peterGames.push(game);
        }else if (command === 'Uninstall') {
            let indexOfGameForDelete = peterGames.indexOf(game);
            if (indexOfGameForDelete > -1) {
                peterGames.splice(indexOfGameForDelete, 1);  
            }
            continue;      
        }else if (command === 'Update') {
            let indexOfGameForUpdate = peterGames.indexOf(game);
            let updatedGame = peterGames.splice(indexOfGameForUpdate, 1)[0];
            peterGames.push(updatedGame);
        }else if(command === 'Expansion'){
            let gameArgs = game.split('-');
            let gameName = gameArgs[0];
            if (peterGames.includes(gameName)) {
                let indexOfGameForExpand = peterGames.indexOf(gameName);
                peterGames.splice(indexOfGameForExpand + 1, 0, gameArgs[0] + ':' + gameArgs[1])                
            }
        }
    }

    console.log(peterGames.join(' '));
}

solve(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']);