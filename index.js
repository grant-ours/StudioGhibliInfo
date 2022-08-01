fetch("https://ghibliapi.herokuapp.com/films/")
.then(response => response.json())
.then(movies => {
    movies.forEach(movie => {
        const movieBar = document.querySelector('#movie-bar');
        const span = document.createElement('span');
        span.innerText = movie.title;
        movieBar.append(span);
    })
});