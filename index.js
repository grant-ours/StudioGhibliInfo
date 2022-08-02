let film = {};
let characters;
let button;
const movieBar = document.querySelector('#movie-bar');

fetch("https://ghibliapi.herokuapp.com/films/")
.then(response => response.json())
.then(movies => {
    movies.forEach(
       movie => {
        const span = document.createElement('span');
        span.innerText = movie.title;
        movieBar.append(span);
        span.addEventListener('click', (event) => {
            film = event.target.innerText
            const title = document.querySelector('#title');
            const ogTitle = document.querySelector('#ogTitle');
            const image = document.querySelector('#image');
            const directorAndProducer = document.querySelector('#directorAndProducer');
            const releaseDate = document.querySelector('#releaseDate');
            const rtScore = document.querySelector('#rtScore');
            const description = document.querySelector('#description');
            //const moreInfo = document.querySelector('.moreInfo');
            

            title.innerText = movie.title;
            ogTitle.innerText = movie.original_title;

            image.src = movie.image;
            image.alt = movie.title;

            directorAndProducer.innerText = `Director: ${movie.director}  |  Producer: ${movie.producer}`;
            releaseDate.innerText = `Release Date: ${movie.release_date}`;
            rtScore.innerText = `Rate Score: ${movie.rt_score}`;
            description.innerText = `Description: ${movie.description}`;

        
       
         })
        })
    });

    const darkButton = document.createElement('button');
    darkButton.id = 'dark';
    const buttonDiv = document.querySelector('#buttons');
    darkButton.innerText = 'Dark Mode';
    buttonDiv.append(darkButton);

    const natureButton = document.createElement('button');
    natureButton.id = 'nature';
    natureButton.innerText = 'Nature Mode';
    buttonDiv.append(natureButton);

    const skyButton = document.createElement('button');
    skyButton.id = 'sky';
    skyButton.innerText = 'Sky Mode';
    buttonDiv.append(skyButton);

    const resetButton = document.createElement('button');
    resetButton.id = 'reset';
    resetButton.innerText = 'Reset';
    buttonDiv.append(resetButton);

    const html = document.querySelector('html');
    

    skyButton.addEventListener('click', (e) => {
        html.style.background = '#7CBDFF';
        html.style.color = 'white';
        movieBar.style.background = 'rgb(49, 109, 179)';
        movieBar.style.color = 'white';
    })

    darkButton.addEventListener('click', (e) => {
        html.style.background = '#454545';
        html.style.color = 'white';
        movieBar.style.background = 'black';
        movieBar.style.color = 'white';
    })

    natureButton.addEventListener('click', (e) => {
        html.style.background = '#90EE90';
        html.style.color = 'black';
        movieBar.style.background = '#00C818';
        movieBar.style.color = 'black';
    })

    resetButton.addEventListener('click', (e) => {
        html.style.background = '#E6E6FA';
        html.style.color = 'black';
        movieBar.style.background = '#483D8B';
        movieBar.style.color = 'white';
    })


    

        /*button = document.createElement('button');
        characters = document.querySelector('.characters');
         button.innerText = 'Click Here To See More Characters'
         button.addEventListener('click', (event) => {
             console.log(event.target);
              movie.people.forEach(person => {
                 console.log();
                 fetch(person)
                 .then(response => response.json())
                 .then(person => {
                     console.log(person);
                     const charSpan = document.createElement('span');
                     const name = document.createElement('p');
                     const age = document.createElement('p');
                     const gender = document.createElement('p');
                     const eyeColor = document.createElement('p');
                     const hairColor = document.createElement('p');
                     name.innerText = person.name;
                     charSpan.append(name);
                 })
            
             })
         }) 
         
        })
        characters.append(button)
        */


