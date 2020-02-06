let starWarsData;
fetch("https://swapi.co/api/people/14/")
  .then(response => {
    return response.json();
  })
  .then(data => {
    starWarsData = data;
    return starWarsData;
  })
  .then(response => {
    renderName();
  });

let species;
fetch("https://swapi.co/api/species/1/")
  .then(response => {
    return response.json();
  })
  .then(data => {
    species = data;
    renderSpaecies();
  });

let world;
fetch("https://swapi.co/api/planets/22/")
  .then(response => {
    return response.json();
  })
  .then(data => {
    world = data;
    renderWorld();
  });

let shipOne;
fetch("https://swapi.co/api/starships/10/")
  .then(response => {
    return response.json();
  })
  .then(data => {
    shipOne = data;
    renderFirstShip();
  });

let shipTwo;
fetch("https://swapi.co/api/starships/22/")
  .then(response => {
    return response.json();
  })
  .then(data => {
    shiptwo = data;
    renderSecondShip();
  });

function renderName() {
  let parentEl = document.querySelector("#profile-name");
  let personName = document.createElement("h2");
  personName.innerHTML = starWarsData.name;
  parentEl.appendChild(personName);
  let birthDate = document.createElement("p");
  let year = document.querySelector("#profile-year");
  birthDate.innerHTML = "Birth Date: " + starWarsData.birth_year;
  year.appendChild(birthDate);
  let height = document.createElement("p");
  parentEl.innerHTML = "Height: " + starWarsData.height;
  parentEl.appendChild(height);
}

function renderSpaecies() {
  let parentEl = document.querySelector("#profile-species");
  let speciesName = document.createElement("p");
  speciesName.innerHTML = "Species: " + species.name;
  parentEl.appendChild(speciesName);
}

function renderWorld() {
  let parentEl = document.querySelector("#profile-world");
  let worldName = document.createElement("p");
  worldName.innerHTML = "Homeworld: " + world.name;
  parentEl.appendChild(worldName);
}

function renderFirstShip() {
  let parentEl = document.querySelector("#profile-card");
  let shipName = document.createElement("p");
  shipName.classList.add("ship-name");
  shipName.innerHTML = "Ship: " + shipOne.name;
  parentEl.appendChild(shipName);
}

function renderSecondShip() {
  let parentEl = document.querySelector("#profile-card");
  let shipNameTwo = document.createElement("p");
  shipNameTwo.innerHTML = "Ship: " + shiptwo.name;
  shipNameTwo.classList.add("ship-name");
  parentEl.appendChild(shipNameTwo);
}
