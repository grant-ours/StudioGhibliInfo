let characters;
let button;
const movieBar = document.querySelector("#movie-bar");

//GET Request for all the Studio Ghibli Films
fetch("https://ghibliapi.herokuapp.com/films/")
  .then((response) => response.json())
  .then((movies) => {
    //Going through the data called movies and for each movie, we are doing this:
    movies.forEach((movie) => {
      const span = document.createElement("span");
      span.innerText = movie.title;
      movieBar.append(span);
      span.addEventListener("click", (event) => {
        //When we click on each movie, it is displaying movie information
        const title = document.querySelector("#title");
        const ogTitle = document.querySelector("#ogTitle");
        const image = document.querySelector("#image");
        const directorAndProducer = document.querySelector(
          "#directorAndProducer"
        );
        const releaseDate = document.querySelector("#releaseDate");
        const rtScore = document.querySelector("#rtScore");
        const description = document.querySelector("#description");

        title.innerText = movie.title;
        ogTitle.innerText = movie.original_title;

        image.src = movie.image;
        image.alt = movie.title;

        directorAndProducer.innerText = `Director: ${movie.director}  |  Producer: ${movie.producer}`;
        releaseDate.innerText = `Release Date: ${movie.release_date}`;
        rtScore.innerText = `Rate Score: ${movie.rt_score}`;
        description.innerText = `Description: ${movie.description}`;

        characterInfo = document.querySelector(".characterInfo");

        //Removing Old Button To Avoid Duplicates
        const charButton = document.querySelector("#char");
        const noChar = document.querySelector("#noChar");
        charButton.remove();
        noChar.innerText = "";

        //Removing Old Characters To Make Room For New Characters When Clicking Each Movie
        const characters = document.querySelector("#characters");
        characters.remove();
        const newCharDiv = document.createElement("div");
        newCharDiv.id = "characters";
        characterInfo.append(newCharDiv);

        button = document.createElement("button");
        button.id = "char";
        button.innerText = "Click Here To See More Characters";
        characterInfo.append(button);
        //When we click the characters button, it will display specific movie characters
        button.addEventListener("click", (event) => {
          //console.log(movie);
          //If Statement will say there are no specific characters
          if (movie.people == "https://ghibliapi.herokuapp.com/people/") {
            noChar.innerText =
              "Sorry, the character information for this movie is not available.";
            noChar.style.background = "red";
          }
          //If there are characters, then it will display them for each movie
          else {
            movie.people.forEach((person) => {
              //console.log(person);
              fetch(person)
                .then((response) => response.json())
                .then((people) => {
                  //console.log(people);

                  const charSpan = document.createElement("span");
                  const name = document.createElement("p");
                  const age = document.createElement("p");
                  const gender = document.createElement("p");
                  const eyeColor = document.createElement("p");
                  const hairColor = document.createElement("p");

                  name.className = "info";
                  age.className = "info";
                  gender.className = "info";
                  eyeColor.className = "info";
                  hairColor.className = "info";

                  name.innerText = `Name: ${people.name}  `;
                  age.innerText = `Age: ${people.age}  `;
                  gender.innerText = `Gender: ${people.gender}  `;
                  eyeColor.innerText = `Eye Color: ${people.eye_color}  `;
                  hairColor.innerText = `Hair Color: ${people.hair_color}  `;

                  newCharDiv.append(charSpan);
                  charSpan.append(name);
                  charSpan.append(age);
                  charSpan.append(gender);
                  charSpan.append(eyeColor);
                  charSpan.append(hairColor);
                });
            });
          }
        });
      });
    });
  });

//Creating different mode buttons
const darkButton = document.createElement("button");
darkButton.id = "dark";
const buttonDiv = document.querySelector("#buttons");
darkButton.innerText = "Dark Mode";
buttonDiv.append(darkButton);

const natureButton = document.createElement("button");
natureButton.id = "nature";
natureButton.innerText = "Nature Mode";
buttonDiv.append(natureButton);

const skyButton = document.createElement("button");
skyButton.id = "sky";
skyButton.innerText = "Sky Mode";
buttonDiv.append(skyButton);

const resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.innerText = "Reset";
buttonDiv.append(resetButton);

const html = document.querySelector("html");

//Event Listeners for Different Mode Buttons
skyButton.addEventListener("click", (e) => {
  html.style.background = "#7CBDFF";
  html.style.color = "white";
  movieBar.style.background = "rgb(49, 109, 179)";
  movieBar.style.color = "white";
});

darkButton.addEventListener("click", (e) => {
  html.style.background = "#454545";
  html.style.color = "white";
  movieBar.style.background = "black";
  movieBar.style.color = "white";
});

natureButton.addEventListener("click", (e) => {
  html.style.background = "#90EE90";
  html.style.color = "black";
  movieBar.style.background = "#00C818";
  movieBar.style.color = "black";
});

resetButton.addEventListener("click", (e) => {
  html.style.background = "#E6E6FA";
  html.style.color = "black";
  movieBar.style.background = "#483D8B";
  movieBar.style.color = "white";
});

//hello pls
