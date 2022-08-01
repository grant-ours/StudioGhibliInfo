fetch("https://ghibliapi.herokuapp.com/films/")
.then(response => response.json())
.then(movies => {
    movies.forEach(movie => {
        const movieBar = document.querySelector('#movie-bar');
        const span = document.createElement('span');
        span.innerText = movie.title;
        movieBar.append(span);
        span.addEventListener('click', (event) => {
            const title = document.querySelector('#title');
            title.innerText = movie.title;
            const ogTitle = document.querySelector('#ogTitle');
            ogTitle.innerText = movie.original_title;
            const image = document.querySelector('#image');
            image.src = movie.image;
            image.alt = movie.title;
            const directorAndProducer = document.querySelector('#directorAndProducer');
            directorAndProducer.innerText = `Director: ${movie.director}  |  Producer: ${movie.producer}`;
            const releaseDate = document.querySelector('#releaseDate');
            releaseDate.innerText = `Release Date: ${movie.release_date}`;
            const rtScore = document.querySelector('#rtScore');
            rtScore.innerText = `Rate Score: ${movie.rt_score}`;
            const description = document.querySelector('#description');
            description.innerText = `Description: ${movie.description}`;
        })
    })
});