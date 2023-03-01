// elementen van de html staan onder documents
// om aan de url-string te geraken gebruiken we location
const search = window.location.search
console.log(search)

const params = new URLSearchParams(search)
console.log(params)

console.log(params.get('username'))
console.log(params.get('age'))
console.log(params.get('email'))