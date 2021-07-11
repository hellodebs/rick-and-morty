import { createCharacterElement } from "./character.js";

const url = "https://rickandmortyapi.com/api/character";
const buttonElement = document.querySelector(".load-data");
const selectElement = document.querySelector("#filter");
const mainElement = document.querySelector("main");
const nameInputElement = document.querySelector("#name-input");

//add eventlistener to button
buttonElement.addEventListener("click", () => {
  const currentStatus = selectElement.value;
  const searchName = nameInputElement.value;
  resetCharacters();
  // creat fetch function to receive full data of provided API
  fetch(url)
    .then((response) => {
      return response.json();
    })
    //create function to filter the status
    .then((data) => {
      if (currentStatus !== "") {
        data.results = data.results.filter(
          (characterData) => characterData.status === currentStatus
        );
      }
      // create option to search character by name
      if (searchName !== "") {
        data.results = data.results.filter((characterData) =>
          //character name with lowercase function includes searched name with lowercase function
          characterData.name.toLowerCase().includes(searchName.toLowerCase())
        );
      }
      //iterating through provided data
      data.results.forEach((characterData) => {
        const characterElement = createCharacterElement(characterData);
        mainElement.append(characterElement);
      });
    });
});

//create function to reset cards after selecting new filter
function resetCharacters() {
  document.querySelector("main").innerHTML = "";
}
