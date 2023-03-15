function step1(){
    console.log('step 1')
}

function step2(){
    console.log('step 2')
}

function step3(){
    console.log('step 3')
}

function step4(){
    console.log('step 4')
}

function step5(){
    console.log('step 5')
}
/*
// synchroon
step1()
step2()
step3()
step4()
step5()*/

// asynchroon
/*
setTimeout(step1, 2000)
setTimeout(step2, 3000)
setTimeout(step3, 1000)
setTimeout(step4, 5000)
setTimeout(step5, 4000)
*/

// Call backs
// functie die je meegeeft als argument aan een andere functie 
// setTimeout(step1, 2000) -> de step1 is een callback, als 2 seconden verstreken zijn, voor step1 uit

// Op onderstaande manier gaan we niet kunnen werken omdat in het voorbeeldje van de demo, de volgorde belangrijk is
//setTimeout(bestellingPlaatsen, 2000)
//setTimeout(bestellingLeveren, 1000)
/*
function orderPizza(size, saus, toppings){
    console.log('bestelling plaatsen');
    setTimeout(() => {
        // deze callback wordt uitgevoerd wanneer de timeout verlopen is, hier wordt niet op gewacht
        console.log(`Maak deeg voor ${size} pizza`)
        setTimeout(() => {
            console.log(`Smeer ${saus} op de pizza`)
            setTimeout(() => {
                console.log(`Leg ${toppings} op de pizza`)
                setTimeout(() => {
                    console.log('Bak pizza')
                    setTimeout(() => {
                        console.log('Kies doos')
                        setTimeout(() => {
                            console.log('Bestelling leveren')
                        }, 1000)
                    }, 2000)
                }, 10000)
            }, 5000)
        }, 1000)
    }, 2000)
}*/

// Promises

// dit is een object, dat belooft dat er iets mee gaat gebeuren
// wanneer dat dit gebeurt, dan gaat de callback uitgevoerd worden
// then, catch, finally

/*let restaurantClosed = true

function executeTask(task, time){
    console.log(task)
    // na time, voer de resolve (of de then) van de promise uit
    const promise = new Promise((resolve, reject) => {
        if(restaurantClosed){
            reject('restaurant closed')
        } else {
            setTimeout(() => {resolve()}, time)
        }
    })

    return promise
}

function orderPizza(size, saus, toppings){
    executeTask('bestelling plaatsen', 2000)
        .then(() => {
            // deze functie is eigenlijk nog steeds een soort callback
            return executeTask(`Maak deeg voor ${size} pizza`, 2000)
        })
        .then(() => {
            return executeTask(`Smeer ${saus} op de pizza`, 1000)
        })
        .then(() => {
            return executeTask(`Leg ${toppings} op de pizza`, 5000)
        })
        .then(() => {
            return executeTask('Bak pizza', 10000)
        })
        .then(() => {
            return executeTask(`Kiezen doos`, 2000)
        })
        .then(() => {
            return executeTask(`Bestelling leveren`, 1000)
        })
        .catch((msg) => {
            console.log(msg)
        })     
}*/

// Waiting for multiple promises
// then() wordt pas uitgevoerd als alle promises resolved zijn
/*
const pokemon1 = fetch('https://pokeapi.co/api/v2/pokemon');
const pokemon2 = fetch('https://pokeapi.co/api/v2/pokemon?offset=20');

Promise.all([pokemon1, pokemon2]).then((responses) => {
    // we wachten op 2 promises dus krijgen we ook 2 responses
    // map functie voert iets uit voor elk element in de rij
    const jsons = responses.map((response) => response.json()) // set elke response om naar zijn json
    // .json() geeft een promise terug -> jsons object is eigenlijk een array van promises
    return Promise.all(jsons)
}).then((jsons) =>{
    jsons.forEach(e => console.log(e))
})
*/

// async await
// await in functie toevoegen om aan te geven dat er gewacht moet worden tot de actie resolved is
// async bij de definitie van de functie is nodig om dit aan te geven!
let restaurantClosed = true

function executeTask(task, time){
    console.log(task)
    // na time, voer de resolve (of de then) van de promise uit
    const promise = new Promise((resolve, reject) => {
        if(restaurantClosed){
            reject('restaurant closed')
        } else {
            setTimeout(() => {resolve()}, time)
        }
    })

    return promise
}

async function orderPizza(size, saus, toppings){

    try{
        await executeTask('Bestelling plaatsen', 2000)
        await executeTask(`Maak deeg voor ${size} pizza`, 2000)
        await executeTask(`Smeer ${saus} op de pizza`, 1000)
        await executeTask(`Leg ${toppings} op de pizza`, 5000)
        await executeTask('Bak pizza', 10000)
        await executeTask(`Kies doos`, 2000)
        await executeTask(`Lever`, 1000)

        console.log('bestelling geleverd')
    } catch(err){
        console.log(err)
    }
}

orderPizza('large', 'tomatensaus', ['salami', 'chilipeppers', 'paprika', 'spek'])

console.log('test')

async function loadPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')

    if(response.ok){
        let json = await response.json()
        console.log(json)
    } else{
        const error = await response.json()
        console.log(error)
    }
}