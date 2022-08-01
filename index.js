fetch("https://ghibliapi.herokuapp.com/films/")
.then(response => response.json())
.then(data => {
    console.log(data)
})
