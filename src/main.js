const url = "https://rickandmortyapi.com/api/character";
const buttonElement = document.querySelector(".load-data");
const selectElement = document.querySelector("#filter");

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.forEach((characterData) => {
        characterElement(characterData);
      });
      console.log(data);
    });
});

function characterElement(character) {
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("character");

  const imgElement = document.createElement("img");
  imgElement.src = character.image;

  const h2Element = document.createElement("h2");
  h2Element.textContent = character.name;

  sectionElement.append(imgElement);
  sectionElement.append(h2Element);

  const mainElement = document.querySelector("main");
  mainElement.append(sectionElement);
}

//Add addEventListener in select element for filtering status

selectElement.addEventListener("change", (event) => {
  const currentStatus = event.target.value;
  resetCharacters();
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.forEach((characterData) => {
        if (characterData.status === currentStatus) {
          characterElement(characterData);
        }
      });
    });
});

function resetCharacters() {
  document.querySelector("main").innerHTML = "";
}
