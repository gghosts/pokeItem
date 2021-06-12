const $searchInput = document.querySelector("[name=pokemon-id]");
const $title = document.querySelector(".searched-pokemon");
const $form = document.querySelector(".pokemon-form");
const $pokemonContainer = document.querySelector(".pokemon-container");
const url = `https://pokeapi.co/api/v2/pokemon/${searchExpression}`;

function formSubmitted(event) {
  event.preventDefault();
  const searchExpression = $searchInput.value;
  title.innerHTML = "Pokemon name: " +searchExpression;
  $searchInput.value = "";
  $result.innerHTML = "";

  fetch('url')
  //.then(x => x.json())
  //.then(data => {
    .then(function(res){
      return res.json()
    }).then(function(data){
//      let imageHTMLList [];
      for (let i of data) {
        const url = i.img;
        const url = i.name;
        const url = i.type;
        const url = i.moves;
        const url = i.abilites;
        const url = i.sprites;
      }

      const html = imageHtmlList.join("");
      $result.innerHTML =imageHtmlList;
      });
      }
    //data.item.forEach(function(val){
    
    
    //  const html = '<img src="${Url}" alt="noun sprite" />';
  //  document.querySelector(".pokemon-container").innerHTML = html;
  });

  document.querySelector("form").addEventListener("submit", formSubmitted);
}    



//const url = "https://n161.tech/api/dummyapi/user?limit=5&page=1";
// fetch is promise-based. once it completes, it will move onto the next step//
//then it's expecting a response object, have to "return" beneath//
//built in to work seamlessly with js to return json data//
//const output added later to get data onto page. selecting element of output here
//const output = document.querySelector('.output');
//fetch(url).then(function(res){
//    console.log(res);
//    return res.json()
    //callback//
// }).then(function(data){
    //its data data bc the array is contained within the data. until you actually
    //see the array, you cant loop through the content
//    console.log(data.data);
    //use forEach to loop through the items in array using function. 
//    data.data.forEach(function(val){
        //using val in the console as we loop thry the array. use val by itself
        //to get all data. val.firstName to get that etc
        //console.log(val.firstName + '' + val.lastName); -- this was original, the we wanted to output html onto page
//        output.innerHTML += val.firstName + '' + val.lastName + '<br>';
//    });
//will output errors with request, if there are any present//
//}).catch(function(error){
//    console.log(error);
//})