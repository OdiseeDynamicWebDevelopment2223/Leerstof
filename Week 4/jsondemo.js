/*const persoon = {
    key: 'value',
    key2: 'value2',
    key3: 10.0005
}*/

const persoon = {
    voornaam: 'jens',
    achternaam: 'baetens',
    leeftijd: 31,
    punten: [10, 20, 30, 100, 29],
    kinderen: [
        {
            voornaam: 'bla',
            leeftijd: 5
        },
        {
            voornaam: 'blabla',
            leeftijd: 3
        }
    ],
    huisdier: {
        type: 'hond',
        naam: 'Charlie'
    }
}

console.log(persoon)
// javascript object omzetten naar een json string
console.log(JSON.stringify(persoon)) 
const persoon_string = JSON.stringify(persoon)

// terug naar object van een json string (omgekeerde van de stringify)
const persoon2 = JSON.parse(persoon_string)
console.log(persoon2)

// Persoon opslaan in localstorage zodat het bewaard blijft
// steeds strings opslaan
// intern is localstorge ook een dictionary / soort json
// localStorage.setItem('key', 'value')
localStorage.setItem('persoon', persoon_string) // 1 manier om het te doen
localStorage.persoon2 = persoon_string // 2e manier om te doen --> is wel wat verouderd
    // 2e methode gebruik je best niet: je kan bvb niet de keys getItem, setItem, remove, length