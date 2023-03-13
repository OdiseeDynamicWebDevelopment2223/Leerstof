const url = 'https://pokeapi.co/api/v2/pokemon'

const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')
const pokemons = document.getElementById('pokemon-list')

let prevUrl = null
let nextUrl = null

function getPokemons(url){
    pokemons.innerHTML = ''
    console.log(url)
    fetch(url).then((response) => {
        if (response.ok){
            return response.json()
        } else {
            console.log("er ging iets mis");
        }
    }).then((data) => {
        console.log(data)
        
        if(data.previous != null){
            prevUrl = data.previous
        }
        if(data.next != null){
            nextUrl = data.next
        }
        showPokemons(data.results)
    })
}
getPokemons(url)

function showPokemon(url){
    fetch(url).then((response) => {
        if (response.ok){
            return response.json()
        } else {
            console.log("er ging iets mis");
        }
    }).then((data) => {
        const li = document.createElement('div');
        console.log(data)
	    li.innerHTML = `<h1>${data.name}</h1><img src='${data.sprites.front_default}'/> `;
	    pokemons.append(li);
    })
}

function showPokemons(results){
        results.forEach(element => {
        showPokemon(element.url)
    });
}

btnPrev.addEventListener('click', (event) =>{
    event.preventDefault()

    // vraag nieuwe pokemens op
    if(prevUrl != null){
        getPokemons(prevUrl)
    }
})

btnNext.addEventListener('click', (event) => {
    event.preventDefault()

    // vraag nieuwe pokemons op
    if (nextUrl != null){
        getPokemons(nextUrl)
    }
})