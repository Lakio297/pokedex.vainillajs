/* ===== GET HTML ELEMENTS ===== */
const app = document.querySelector(".app");
const searchBar = document.querySelector(".app__search");
const appContainer = document.querySelector(".app__container");
/* ===== VARIABLES ===== */
const URL = "https://pokeapi.co/api/v2/pokemon";
let nextUrl = "";
let previousUrl = "";
/* ===== FUNCTIONS ===== */
async function getData(url) {
  // window.fetch(URL)
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data);

  //   nextUrl = data.next
  //   previousUrl = data.previous

  //   printPokemons(data.results)
  // })

  const res = await window.fetch(url);
  const { next, previous, results } = await res.json();

  nextUrl = next;
  previousUrl = previous;

  printPokemons(results);
}

async function printPokemons(data) {
  let html = "";

  for (const { url } of data) {
    const res = await window.fetch(url);
    const { name, sprites } = await res.json();

    html += `
    <div class="app__item">
    <img class="app__item--img" src="${sprites.other["official-artwork"].front_default}" alt="${name}">
    <h2 class="app__item--name">${name}</h2>
    </div>
    `;
  }

  appContainer.innerHTML = html;
}

const btnNext = () => {
  nextUrl ? getData(nextUrl) : window.alert("Nada que mostrar");
};
const btnPrev = () => {
  previousUrl ? getData(previousUrl) : window.alert("Nada que mostrar");
};

getData(URL);

async function printPokemon({ value }) {
  let html = "";

  const res = await window.fetch(URL + `/${value}`);
  const { name, sprites } = await res.json();

  html += `
  <div class="app__item">
  <img class="app__item--img" src="${sprites.other["official-artwork"].front_default}" alt="${name}">
  <h2 class="app__item--name">${name}</h2>
  </div>
  `;
  return html;
}
/* ===== LISTENERS ===== */

app.addEventListener("click", ({ target }) => {
  if (target.classList.contains("button--prev")) btnPrev();
  if (target.classList.contains("button--next")) btnNext();
  if (target.classList.contains("button--initial")) getData(URL);
});

searchBar.addEventListener("change", async ({ target }) => {
  if (target.value !== "") {
    const html = await printPokemon(target);

    appContainer.innerHTML = html;
  } else {
    getData(URL);
  }
});
