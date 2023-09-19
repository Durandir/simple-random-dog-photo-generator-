const btn = document.querySelector('button')
const img = document.querySelector('img')
const URL = 'https://dog.ceo/api/breeds/image/random'


btn.addEventListener('click', () => {
	fetch(URL)
	.then(respo => respo.json())
	.then(info => img.setAttribute('src', info.message))
	.catch(redAlert => console.error(redAlert))
})

	