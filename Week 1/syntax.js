// CONSTANTEN

//const age = 32;
// const age = 32.0;
const age = 'tweeendertig'; // dit is een string
console.log(age);

// dit gaat niet werken want het is een constante
// age = 33;
console.log(age);

// VARIABELEN

// De moderne en beste manier, gebruik altijd deze
let age2 = 32;
console.log(age2);

age2 = 33;
console.log(age2);

age2= 'vierendertig';
console.log(age2);

// Dit gaat niet
//let const age3;

//dit geeft niet hetzelfde resultaat
let a = 11;
let b = 22;
console.log(a+b);
a = 11;
b = '22';
console.log(a+b);

// dit geeft een foutmelding omdat het boven de functie staat -> bestand wordt van boven naar beneden uitgevoerd
// sum(a+b);

function sum(va, vb)
{
	let a = 5;
	console.log(va + vb);
}

// met let kan je geen dingen buiten code-blocks gebruiken (buiten de scope)
// console.log(va);
console.log(a);
//sum(a, b);

// Dit is de oude manier - gebruik deze niet in dit vak
/*var a2 = 15;
var b2 = 10;

function sumVar(va, vb){
	a2 = 5;
	console.log(va+vb);
}
sumVar(a2+b2);
console.log(a2);
*/

// OBJECTEN
const persoon = new Object();	// dit object is constant maar het object kan wel aangepast worden;
console.log(persoon);

persoon.voornaam = 'jens';
persoon.achternaam = 'baetens';
persoon.birthday = new Date(1991, 6, 15);

console.log(persoon);

console.log(persoon.achternaam);
console.log(persoon['voornaam']);
console.log(persoon.birthday.toDateString());

// Dit gaat niet werken omdat het const is.
// persoon = 'test';

// ARRAYS

const animals=['hond', 'kat', 5];
console.log(animals);
console.log(animals[1]);
// dit gaat werken omdat het net zoals bij een object is
// je kan de elementen in de array aanpassen maar niet de hele array veranderen door bvb een string
animals[50] = 'boe';
console.log(animals);
console.log(animals[40]);

animals.push('kip');	// plaatst achteraan er iets bij
animals.unshift('haan');	// plaatst vooraan er iets bij
console.log(animals);
console.log(animals.pop());
console.log(animals.shift());
console.log(animals);

// FOR IN -> alle keys aflopen
// person.key = value
const person = new Object();
person.name = 'jef';
person.birthDate = new Date();

for (const prop in person){
	console.log(prop);
}

const dict = {'book': 200, 'cd': 400};

for (const item in dict){
	console.log(item);
}

// FOR OFF -> alle values aflopen
// person.key = value
// wordt in arrays gebruikt

const d = [0,1,2,3,4,5,6];

for (const item of d){
	console.log(item);
}

// Functions
function helloWorld(){
	console.log('hello world');
}

function helloWorldWithName(name){
	console.log('hello '  + name);
	return 'hello ' + name;
}

// SELF invoking function
// best om steeds al je code in dit soort functie te steken
// functions moeten hier niet in staan
(function(){
	console.log('test');
	let importantVariableFromOtherFileIsNotChanged =5 ;

	helloWorld();
	console.log(helloWorldWithName('jens'));
})();
  
let importantVariableFromOtherFileIsChanged =5 ;

// OEFENING 3

let tekst = 'dit';

morsecode = toMorse(tekst);

originele_tekst = fromMorse(morsecode);

// je hoopt dat originele_tekst === tekst

// om het probleem met de tabs op te lossen
// onderaan het scherm in de balk zie je rechts spaces staan
// klik daarop en dan krijg je bovenaan een popup
// klik op indent using tabs
// daarna op 4