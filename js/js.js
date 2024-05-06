let name = document.querySelector('.name_input')
let btn = document.querySelector('.reg_btn')
let block = document.querySelector('.output')
function User(name) {
	this.name = name
}
btn.addEventListener('click', () => {
	const nameUser = name.value
	const user = new User(nameUser)
	const userId = localStorage.length + 1

	localStorage.setItem(userId, JSON.stringify(user))
	console.log(localStorage.getItem(userId))
})
