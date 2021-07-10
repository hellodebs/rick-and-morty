import { createCharacterElement } from "./character.js";

const url = "https://rickandmortyapi.com/api/character";
const buttonElement = document.querySelector(".load-data");
const selectElement = document.querySelector("#filter");
const mainElement = document.querySelector("main");

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  const currentStatus = selectElement.value;

  console.log(currentStatus);

  resetCharacters();
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (currentStatus !== "") {
        data.results = data.results.filter(
          (characterData) => characterData.status === currentStatus
        );
      }
      data.results.forEach((characterData) => {
        const characterElement = createCharacterElement(characterData);
        mainElement.append(characterElement);
      });
    });
});

function resetCharacters() {
  document.querySelector("main").innerHTML = "";
}
