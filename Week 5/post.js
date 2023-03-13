const base_url='https://gorest.co.in/public/v2/users';

const user = { email: 'matthias.druwe@odisee.be', name: 'matthias', gender:'male', status:'inactive'};
const headers = new Headers();

headers.set('Authorization','Bearer 9c1cddb4f13a53f5ec1eae097599f3d6f2a1abfbee632b2f0d3e42ad8d22b6c8');
headers.set('content-type', 'application/json');

const options = {
	method: 'POST',
	headers: headers,
	body: JSON.stringify(user)
};

fetch(base_url,options).then(response => {
	console.log(response);
	if(response.ok){
		return response.json();
	} 
	throw Error(response.statusText);
}).then(json => console.log(json))
	.catch(error => console.error(error));