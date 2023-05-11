const categoriesApp = {
	data() {
		return {
			categoriesList: [
				'Стулья', 'Кровати', 'Комоды и тумбы', 'Столы', 'Шкафы', 'Кухонный гарнитур'
			]
		}
	}
}


const materialsApp = {
	data() {
		return {
			materialsList: [{
					name: 'дуба',
					descr: 'Дуб - это твердое и прочное древесное вещество, которое широко используется в производстве мебели. Он имеет высокую плотность и твердость, что делает его идеальным материалом для изготовления мебели, которая должна быть прочной и долговечной.'
				},
				{
					name: 'ореха',
					descr: ' Ореховое дерево имеет темно-коричневый цвет и красивую текстуру, что делает его очень привлекательным для изготовления мебели. Ореховое дерево обычно используется для изготовления мебели высокого качества, такой как шкафы, комоды, столы и стулья. Оно также может использоваться для изготовления дверей и оконных рам.'
				},
				{
					name: 'стекла',
					descr: 'Одним из основных методов изготовления мебели из стекла является термическое закаливание. Этот процесс заключается в нагреве стекла до высокой температуры, а затем быстром охлаждении. Это позволяет увеличить прочность и устойчивость стекла к механическим воздействиям.'
				},
				{
					name: 'камня',
					descr: 'Камень - это твердый и прочный материал, который может использоваться в производстве мебели. Для изготовления мебели из камня используются специальные технологии и оборудование.'
				},
			],
			materialsListShort: [
				'Сосна', 'Ель', 'Береза', 'Лиственница', 'Ясень', 'Бук'
			]
		}
	}
}

Vue.createApp(categoriesApp).mount('#categories_app');
Vue.createApp(materialsApp).mount('#materials_app');

const closeFormBtn = document.getElementById('close-form_btn').addEventListener('click', () => {
	document.getElementById('callback').classList.add('callback-form_hidden');
	formWrapper.classList.add('callback-form_hidden');
})

const formWrapper = document.getElementById('form-wrapper');
// formWrapper.addEventListener('click', () => {
// 	document.getElementById('callback').classList.add('callback-form_hidden');
// 	formWrapper.classList.add('callback-form_hidden');
// })

const categoriesBtns = document.querySelectorAll('.category-btn');
const categoriesItems = document.querySelectorAll('.categories_app-item');
const materialShortBtn = document.getElementById('material_other').addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('.materials-short ').classList.toggle('material-short_hidden');
})

const callbackShowBtns = document.querySelectorAll('.callback-show').forEach(btn => {
	btn.addEventListener('click', () => {
		document.getElementById('callback').classList.remove('callback-form_hidden')
		formWrapper.classList.remove('callback-form_hidden');
	})
})


let selectedCategory = 0;

function parseId(id) {
	console.log(id)
	return id.split('-')[1];
}

categoriesBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		selectedCategory = parseId(e.target.id);
	})
})
