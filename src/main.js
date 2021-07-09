const url = "https://rickandmortyapi.com/api/character";
const buttonElement = document.querySelector(".load-data");
const selectElement = document.querySelector(".section-filter");

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.forEach((characterData) => {
        characterelement(characterData);
      });
      console.log(data);
    });
});

function characterelement(characters) {
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("character");

  const imgElement = document.createElement("img");
  imgElement.src = characters.image;

  const h2Element = document.createElement("h2");
  h2Element.textContent = characters.name;

  sectionElement.append(imgElement);
  sectionElement.append(h2Element);

  const mainElement = document.querySelector("main");
  mainElement.append(sectionElement);
}

//Add select element for filter

selectElement.addEventListener("change", () => {});
