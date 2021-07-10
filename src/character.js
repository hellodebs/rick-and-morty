export function createCharacterElement(character) {
  const sectionElement = document.createElement("section");
  sectionElement.classList.add("character");

  const imgElement = document.createElement("img");
  imgElement.src = character.image;

  const h2Element = document.createElement("h2");
  h2Element.textContent = character.name;

  sectionElement.append(imgElement);
  sectionElement.append(h2Element);

  return sectionElement;
}
