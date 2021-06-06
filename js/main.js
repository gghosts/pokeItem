const searchInput = document.querySelector("[name=item-id]");
const title = document.querySelector(".searched-items");
function formSubmitted(event) {
  event.preventDefault();
  const searchExpression = searchInput.value;
  title.innerHTML = searchExpression + " cards:";
  searchInput.value = "";

  fetch('https://pokeapi.co/api/v2/item/?id-${searchExpression}')
  .then(x => x.json())
  .then(data => {
    const html = '<img src="${Url}" alt="item sprite" />';
    document.querySelector(".items-container").innerHTML = html;
  });

  document.querySelector("form").addEventListener("submit", formSubmitted);
}