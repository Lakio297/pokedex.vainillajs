/* ===== GET HTML ELEMENTS ===== */
const app = document.querySelector('.app')
const searchBar = document.querySelector('.app__search')
const appContainer = document.querySelector('.app__container')
/* ===== VARIABLES ===== */
const URL = 'https://pokeapi.co/api/v2/pokemon'
const nextUrl = ''
const previousUrl = ''
/* ===== FUNCTIONS ===== */
function getData () {

  window.fetch(URL).then((res) => {
    res.json()
  }).then((data) => {
    console.log(data);
  })

}

getData()
/* ===== LISTENERS ===== */

