/* ===== GET HTML ELEMENTS ===== */
const app = document.querySelector('.app')
const searchBar = document.querySelector('.app__search')
const appContainer = document.querySelector('.app__container')
/* ===== VARIABLES ===== */
const URL = 'https://pokeapi.co/api/v2/pokemon'
let nextUrl = ''
let previousUrl = ''
/* ===== FUNCTIONS ===== */
async function getData () {
  // window.fetch(URL)
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data);

  //   nextUrl = data.next
  //   previousUrl = data.previous

  //   printPokemons(data.results)
  // })

  const res = await window.fetch(URL)
  const {next, previous, result} = await res.json()

  nextUrl = next
  previousUrl = previous

  
}

getData()

function printPokemons (data) {
  console.log(data);
}
/* ===== LISTENERS ===== */

