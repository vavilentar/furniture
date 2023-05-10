const categoriesApp = {
	data() {
		return {
			categoriesList: [
				'Стулья', 'Кровати', 'Комоды и тумбы', 'Столы', 'Шкафы', 'Кухонный гарнитур'
			]
		}
	}
}

Vue.createApp(categoriesApp).mount('#categories_app');
const categoriesBtns = document.querySelectorAll('.category-btn');
const categoriesItems = document.querySelectorAll('.categories_app-item');

function parseId(id) {
	return id.split('-')[1];
}

categoriesBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		console.log(parseId(e.target.id))
		console.log(categoriesItems[parseId(e.target.id)].id)
	})
})

const slides = document.querySelectorAll('.slide')
slides.forEach(item => {
	item.addEventListener('click', (e) => {
		clearActiveClasses()
		item.classList.add('active')
	})
})

function clearActiveClasses() {
	slides.forEach((item) => {
		item.classList.remove('active')
	})
}