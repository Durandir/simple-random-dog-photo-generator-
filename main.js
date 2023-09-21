const btn = document.querySelector('#btn') 
const img = document.querySelector('#image')
const url = 'https://dog.ceo/api/breeds/image/random' 


btn.addEventListener('click', () => {
	fetch(url)
	.then(response => response.json())
	.then(info => img.setAttribute('src', info.message))
	.catch(error => console.error(error)) 
})

