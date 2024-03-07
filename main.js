const title = document.querySelector('.title')
const set1 = document.querySelector('.set1')
const set2 = document.querySelector('.set2')
const set3 = document.querySelector('.set3')
const set4 = document.querySelector('.set4')
const set5 = document.querySelector('.set5')

document.addEventListener('scroll', () => {
	const val = window.scrollY
	// console.log(val)
	title.style.marginTop = val * 1.1 + 'px'
	set1.style.marginBottom = -val * 0.7 + 'px'
	set2.style.marginBottom = -val * 0.3 + 'px'
	set3.style.marginBottom = -val * 0.4 + 'px'
	set4.style.marginBottom = -val * 0.1 + 'px'
	set5.style.marginBottom = -val * 0.3 + 'px'
})
