function solve(input) {
    let tasks = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let command = tokens[0];
        if (command === 'Complete') {
            let index = Number(tokens[1]);
            if (isValidIndex(index, tasks)) {
                tasks[index] = 0;
            }
        }else if (command === 'Change') {
            let index = Number(tokens[1]);
            let time = Number(tokens[2]);
            if (isValidIndex(index, tasks)) {
                tasks[index] = time;
            }
        }else if (command === 'Drop') {
            let index = Number(tokens[1]);
            if (isValidIndex(index, tasks)) {
                tasks[index] = -1;
            }
        }else if (command === 'Count') {
            let subCommand = tokens[1];
            if (subCommand === 'Completed') {
                let completedTasks = tasks.filter(t => t === 0);
                console.log(completedTasks.length);
            }else if (subCommand === 'Incomplete') {
                let incompletedTasks = tasks.filter(t => t > 0);
                console.log(incompletedTasks.length);
            }else if (subCommand === 'Dropped') {
                let droppedTasks = tasks.filter(t => t < 0);
                console.log(droppedTasks.length);
            }
        }else if (command === 'End') {
            let finalTasks = tasks.filter(t => t > 0);
            console.log(finalTasks.join(' '));
        }
    }

    function isValidIndex(index, array){
        return index >= 0 && index < array.length;
    }
}

solve(['1 2 3 4 5 4 0 3 2 1',
    'Complete 0',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 4 1',
    'Count Completed',
    'End']);