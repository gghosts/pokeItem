const searchInput = document.querySelector("[name=item-name]");
const title = document.querySelector(".searched-items");
function formSubmitted(event) {
  event.preventDefault();
  const searchExpression = searchInput.value;
  title.innerHTML = searchExpression + " cards:";
  searchInput.value = "";

  fetch('https://pokeapi.co/api/v2/item/name=${item-name}/')
  .then(x =>) x.json())
  .then(data =>) {
    const html = '<img src="$data.items[0].spritesUrl} alt="item sprite" />';
    document.querySelector(".items-container").innerHTML = html;
  });
}

document.querySelector("form").addEventListener("submit", formSubmitted);