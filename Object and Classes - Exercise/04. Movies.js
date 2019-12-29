function solve(input){
    
    let movies = [];

    input
        .forEach((line) => {
            let tokens = line.split(' ');

            if (line.includes('addMovie')){                
                let movieTitle = tokens.slice(1).join(' ');                
                movies.push({ name: movieTitle});
            }else if (line.includes('directedBy')){                
                let indexOfDirectedBy = tokens.indexOf('directedBy');
                let movieTitle = tokens.slice(0, indexOfDirectedBy).join(' ');
                let director = tokens.slice(indexOfDirectedBy + 1).join(' ');
                let movie = movies.find(m => m.name === movieTitle);
                
              if(movie){
                    movie.director = director;
                } 
            }else if(line.includes('onDate')){
                let index = tokens.indexOf('onDate');
                let movieTitle = tokens.slice(0, index).join(' ');
                let date = tokens.slice(index + 1).join(' ');
                let movie = movies.find(m => m.name === movieTitle);

                if(movie){
                    movie.date = date;
                } 
            }
        })

        for (const movie of movies) {
            let keys = Object.keys(movie);
            if (keys.length === 3) {
                console.log(JSON.stringify(movie));
            }
        }        
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );