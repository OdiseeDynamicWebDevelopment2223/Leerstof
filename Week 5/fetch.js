const url = 'https://api.chucknorris.io/jokes/random'
const h1 = document.getElementById('joke')

// op deze manier ga je ervan uit dat je die data onmiddelijk krijgt
const data = fetch(url) // dit gaat niet wachten op een antwoord
h1.innerText = data

// fetch gaat een promise returnen
// een belofte dat er ooit data gaat komen
// wanneer die data komt wordt de functie die je meegeeft aan de then uitgevoerd
fetch(url).then((response) =>{
    console.log(response)
    if(response.ok) // check of de data correct heeft gereturned
        return response.json() // dit gaat ook een promise
    else
        console.log("er was een fout")
}).then((data) => {
    console.log(data)
    h1.innerText = data.value
}).catch((error) => {       // catch is de functie als er iets misgaat bij het opvragen van de data
    console.log(error)
})

h1.innerText = 'waiting for response'