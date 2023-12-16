const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");
console.log(card);



let getPokeData = () => {
  // Generate a random number between 1 and 150
  let id = Math.floor(Math.random() * 150) + 1;
  console.log(id);
  // combine the pokeapi url with pokemon id
  const finalURL = url + id +"/";
  console.log(finalURL);
  // fetch generated URL
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    }).catch((err) => {
      console.log("unable to get pokemon: " + err.message);
    });
};

// Generate card

let generateCard = (data) => {
  // Get neccessary data and assign it to variables
  console.log(data);
  const hp = data.stats[0].base_stats;
  const imgSrc = data.sprites.other.dream_world.front_default;
  let pokeName = data.name;
  pokeName = pokeName.toUpperCase()
  console.log();
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  card.innerHTML = `
   <p class="hp">
          <span>${hp}</span>
          80
        </p>
        <img src="${imgSrc}" alt="" />
        <h2 class='poke-name'>${pokeName}</h2>
        <div class="types">
          <span>type 1</span>
          <span>type 2</span>
        </div>
        <div class="stats">
          <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>${statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>${statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
  `;
};
console.log(card);
btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
