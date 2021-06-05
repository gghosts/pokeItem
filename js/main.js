const searchInput = document.querySelector("[name=item-name]");
const title = document.querySelector(".searched-items");
const cardsContainer = document.querySelector(".items-container");

function formSubmitted(event) {
  event.preventDefault();
  const searchExpression = searchInput.value;
  title.innerHTML = searchExpression + " item:";
  searchInput.value = "";
  cardsContainer.innerHTML = "";

  fetch(`https://pokeapi.co/api/v2/${searchExpression}`)
    .then((x) => x.json())
    .then((data) => {
      let imageHtmlList = [];
      for (let items of data.items) {
        const url = ticker.imageUrl;
        const name = ticker.name;
        if (typeof url !== "undefined") {
          imageHtmlList.push(`<img src="${url}" alt="${name}" />`);
        }
      }
      const html = imageHtmlList.join("");
      ticketsContainer.innerHTML = html;
    });
}

document.querySelector("form").addEventListener("submit", formSubmitted);
