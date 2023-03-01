// het form opvragen
const alleForms = document.forms // alle forms op de hele pagina zitten hieraan
const loginForm = document.forms.loginForm // 1 form opvragen op basis van het id
const usernameInput = loginForm.username    // specifieke input veldjes opvragen
const passwordInput = loginForm.passwoord
const ageInput = loginForm.age
const emailInput = document.getElementById('email') // of zo

console.log(usernameInput)
console.log(usernameInput.value) // waarde van een input

loginForm.addEventListener('submit', (event) => {

    //event.preventDefault(); // hierdoor gaat de waarden van het form doorgestuurd word
    // niet redirecten naar form2
    event.stopPropagation() // bubble / capture onderbreken en bij deze event listener

    console.log(usernameInput.value) // waarde van een input
    console.log(passwordInput.value)
    console.log(ageInput.value)
    console.log(emailInput.value)

    // validatie
    // check if password is valid based on html validatie
    if(passwordInput.validity.valid){
        console.log("is valid")
    }
    if(emailInput.validity.patternMismatch){
        // checkt het pattern
        emailInput.setCustomValidity("je emailadres moet van het domein a.be")
        emailInput.reportValidity()
    }

    // zelf validatie toevoegen
    if(passwordInput.value.length < 5){
        // passwoord te kort
        // zet foutboodschap
        passwordInput.setCustomValidity("Passwoord is te kort")
        // toon foutboodschap en zet het op invalid
        passwordInput.reportValidity()
    } else {
        passwordInput.setCustomValidity("")
        passwordInput.reportValidity()
    }
})

// snellere validatie door middel van inputs op de events

//input event wordt opgeroepen bij elke aanpassing van de value van een element
usernameInput.addEventListener('input', checkLengthHerbruikbaar)
passwordInput.addEventListener('input', checkLengthHerbruikbaar)

function checkLength(event){
    if(usernameInput.value.length <= 3){
        // passwoord te kort
        // zet foutboodschap
        usernameInput.setCustomValidity("Username is te kort")
        // toon foutboodschap en zet het op invalid
    } else {
        usernameInput.setCustomValidity("")
    }
    usernameInput.reportValidity()
    // usernameInput kan je ook vervangen door event.target
    // door met event.target te werken kan je de functie voor meerdere inputs gebruiken
    event.target.reportValidity()
}

function checkLengthHerbruikbaar(event){
    if( event.target.value.length <= 3){
        // passwoord te kort
        // zet foutboodschap
        event.target.setCustomValidity("Te kort")
        // toon foutboodschap en zet het op invalid
    } else {
        event.target.setCustomValidity("")
    }
    event.target.reportValidity()
}

//focus -> wordt opgeroepen bij het binnenkomen van een element
ageInput.addEventListener('focus', (event) => {
    ageInput.value = ""
})

//blur -> wordt opgeroepen bij het verlaten van het element
ageInput.addEventListener('blur', (event) => {
    if(event.target.value < 30 ){
        // passwoord te kort
        // zet foutboodschap
        event.target.setCustomValidity("Je bent jonger dan 30")
        // toon foutboodschap en zet het op invalid
    } else {
        event.target.setCustomValidity("")
    }
    event.target.reportValidity()
})