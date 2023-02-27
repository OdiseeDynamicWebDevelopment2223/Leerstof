// Dom selectie

// by id

const inputLeeftijd = document.getElementById('leeftijd'); // hier geen hashtag gebruiken voor te werken met ids
console.log(inputLeeftijd);
inputLeeftijd.value = 100;

const pIntro = document.getElementById('intro');
pIntro.innerText = "Test";

// query selector

const el1 = document.querySelector('ul li');
el1.innerText = 'Dit is aangepast';

const el2 = document.querySelector('ul li.benadrukt');
el2.innerText = 'Dit is nu ook aangepast';

const el3 = document.querySelector('li:last-child');
el3.innerText = 'Dit is de derde aanpassing';

const elUl = document.querySelector('ul');
let ele = elUl.querySelector('li.benadrukt');
ele.innerText = "werkt ook in twee stapjes"

// query selector all
let eles = document.querySelectorAll('li');
for(ele of eles){
    ele.innerText='Aangepast';
}

eles = document.querySelectorAll('.benadrukt');
for(ele of eles){
    ele.innerText='Moet niet steeds dezelfde html tag zijn';
}

// events

const button1 = document.getElementById('clickFunctionButton');
const button2 = document.getElementById('clickAnonymousFunctionButton');
const button3 = document.getElementById('clickArrowFunctionButton');

function clickFnButtonHandler(event){
    console.log(event);
    console.log('via standaard functie');
}

button1.addEventListener('click', clickFnButtonHandler);

button2.addEventListener('click', function(event){
    console.log('via anonieme functie (eventlistener kan niet verwijderd worden via removeEventListener)')
});

button3.addEventListener('click', (event) => {
    console.log('via arrow functie (eventlistener kan niet verwijderd worden via removeEventListener)'); // arrow functie of lambda expressie (tijdelijke anonieme functie)
    // deel voor de pijl (=>) zijn de argumenten van uw functie
    // deel na de pijl is uw body van de functie
});

// remove event listener
button1.removeEventListener('click', clickFnButtonHandler);

//use capture voorbeeld
const outerdiv = document.getElementById('outer-div');
const innerdiv = document.getElementById('inner-div');
const btn = document.getElementById('button');

/* // van binnen naar buiten (standaard)
outerdiv.addEventListener('click', (event) => {console.log('outerdiv')})
innerdiv.addEventListener('click', (event) => {console.log('innerdiv')})
btn.addEventListener('click', (event) => {console.log('btn')})
*/

/* // van buiten naar binnen 
outerdiv.addEventListener('click', (event) => {console.log('outerdiv')}, true)
innerdiv.addEventListener('click', (event) => {console.log('innerdiv')}, true)
btn.addEventListener('click', (event) => {console.log('btn')}, true)
*/

// wat als er 1 false is
outerdiv.addEventListener('click', (event) => {console.log('outerdiv')}, true)
innerdiv.addEventListener('click', (event) => {console.log('innerdiv')}, false)
btn.addEventListener('click', (event) => {console.log('btn')}, true)


// dynamically add/remove event listeners
const buttonClick = document.getElementById('click-btn');
const buttonAdd = document.getElementById('add-btn');
const buttonRemove = document.getElementById('remove-btn');

function log(){
    // dit kan geen anonyme functie zijn omdat we het anders niet terug kunnen verwijderen
    console.log('click');
}

buttonAdd.addEventListener('click', (event) => {
    buttonClick.addEventListener('click', log);
})

buttonRemove.addEventListener('click', (event) => {
    buttonClick.removeEventListener('click', log);
})

// Dom manipulation inner html
const knop = document.getElementById('knop');
const ele1 = document.getElementById('een-id');
let teller = 0;

function pasEleAan(event){
    console.log(ele1.innerHTML);
    teller++;
    ele1.innerHTML = '<p>Je hebt' + teller + 'keer op de knop geduwd</p>'
    // de ${ } maakt het mogelijk om er de waarde van teller in te plakken
}

knop.addEventListener('click', pasEleAan);

// Dom manipulatie inner Text
const knop1 = document.getElementById('knop1');
const knop2 = document.getElementById('knop2');
const elem1 = document.getElementById('een-id2');
const elem2 = document.querySelector('#aantal');
let teller1 = 0;
let teller2 = 0;

function pasEl1Aan(event){
    console.log(elem1.innerText);
    teller1++;
    elem1.innerText = '<p>Je hebt <em>${teller1}</em> keer op die knop gedrukt</p>'
}

function pasEl2Aan(event){
    console.log(elem2.innerText);
    teller2++;
    elem2.innerText = teller2;
    // de ${ } maakt het mogelijk om er de waarde van teller in te plakken
}

knop1.addEventListener('click', pasEl1Aan);
knop2.addEventListener('click', pasEl2Aan);

// Dom manipulatie class list
const knopAdd = document.getElementById('knopAdd');
const knopRemove = document.getElementById('knopRemove');
const knopToggle = document.getElementById('knopToggle');
const knopContains = document.getElementById('knopContains');
const id3 = document.getElementById('een-id3');

function voegToe(event){
    id3.classList.add('benadrukt');
}

function verwijder(event){
    id3.classList.remove('benadrukt');
}

function toggle(event){
    id3.classList.toggle('benadrukt');
}

function contains(event){
    console.log(id3.classList.contains('benadrukt'));
}

knopAdd.addEventListener('click', voegToe);
knopRemove.addEventListener('click', verwijder);
knopToggle.addEventListener('click', toggle);
knopContains.addEventListener('click', contains);

// Dom manipulatie attributen
const output = document.querySelector('#output');
const el4 = document.querySelector('#een-id4');

document.querySelector('#knop-has').addEventListener('click', (e) => {
    output.innerHTML = el4.hasAttribute('data-nummer');
})

document.querySelector('#knop-get').addEventListener('click', (e) => {
    output.innerHTML = el4.getAttribute('data-nummer');
})

document.querySelector('#knop-set').addEventListener('click', (e) => {
    output.innerHTML = el4.setAttribute('data-nummer', 30);
})

document.querySelector('#knop-remove').addEventListener('click', (e) => {
    output.innerHTML = el4.removeAttribute('data-nummer');
})

// Dom manipulatie - add html elements
const output2 = document.querySelector('#output2');
const prullenbak = document.querySelector('#prullenbak');

let teller83 = 0;

document.querySelector('#knop-append').addEventListener('click', (e) => {
    // Maak element aan
    const el = document.createElement('p');
    // pas het aan voor het toe te voegen aan het DOM
    teller ++;
    el.innerText = teller;
    output2.append(el);
})

document.querySelector('#knop-prepend').addEventListener('click', (e) => {
    // Maak element aan
    const el = document.createElement('p');
    // pas het aan voor het toe te voegen aan het DOM
    teller ++;
    el.innerText = teller;
    output2.prepend(el);
})

let verwijderdeEles = [];

// als je op een paragraaf in de output klikt verwijder die dan
output2.addEventListener('click', (e) => {
    if(e.target === output2){
        // verwijder de paragraaf enkel als je NIET op de marges klikt
        return;
    }
    
    // verwijder het element waar je op klikt
    e.target.remove();

    // het element bestaat wel nog
    verwijderdeEles.push(e.target);

    prullenbak.innerHTML = '';
    verwijderdeEles.forEach((e) => {
        prullenbak.append(e);
    })
})