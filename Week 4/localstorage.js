// string uit de localstorage halen op basis van de key
const personString = localStorage.getItem('persoon')
console.log(personString)

const persoon = JSON.parse(personString)
console.log(persoon)

const div = document.getElementById('kinderen')
persoon.kinderen.forEach((kind) => {
    const ele = document.createElement('p')
    ele.innerText = kind.voornaam
    div.append(ele)
})

// Destructuring
const punt1 = [15, 7, -6];
// we halen via destructuring 3 waarden uit punt1 en wijzen deze toe aan de variabelen x, y en z, in de volgorde waarin ze in de array punt1 staan
const [x,y,z] = punt1;
// dit is gelijk aan
const x_2 = punt1[0];
const y_2= punt1[1];
const z_2 = punt1[3];

// je kan ook waarden overslaan
const [x2, ,z2] = punt1;

// met een object
const punt2 = {
  x3 : 5,
  y3 : 10,
  z3 : 15,
  naam : 'oorsprong'
};

const {x3, y3, naam} = punt2;
// dit is gelijk aan
// const x3 = punt2.x3
// const y3 = punt2.y3
// const naam = punt2.naam

// destructuring verwijdert geen data -> de z3 is niet uitgelezen maar zit wel nog steeds bewaard in punt2

// Spread en rest operators
const zangeressen = ['Karen', 'Kristel', 'Kathleen', 'Klaasje', 'Marthe', 'Hanne', 'Verkiezing2023'];

// hier maak je gebruik van de rest operator (puntjes voor de variabele in een functie) -> voegt alle resterende variabelen samen tot een array
function logK3(eerste, tweede, derde, ...rest) {
  console.log(eerste);
  console.log(tweede);
  console.log(derde);
  console.log(rest);
  
}
logK3(zangeressen); // de hele array wordt in de 'eerste' variabele van de functie gestoken
logK3(...zangeressen) // spread operator -> plaatst elk element van een array in een aparte variabele

