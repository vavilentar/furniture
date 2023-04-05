const prodBlock = document.getElementById('prod-collection');
const nextArrow = document.getElementById('next');
const prevArrow = document.getElementById('prev');

const positions = [
	0, 103, 207, 311, 363
]

let counter = 0;

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

nextArrow.addEventListener('click', () => {
	if(counter != 4) {
		counter++
		prodBlock.style.transform = `translateX(-${positions[counter]}%)`
	} else {
		counter = 0;
		prodBlock.style.transform = `translateX(-${positions[counter]}%)`
	}
})

prevArrow.addEventListener('click', () => {
	if (counter != 0) {
		counter--
		prodBlock.style.transform = `translateX(-${positions[counter]}%)`
	} else {
		counter = 4;
		prodBlock.style.transform = `translateX(-${positions[counter]}%)`
	}
})

function createProdElement() {
	let item = document.createElement('div');
	item.className = 'prod-collection-item';
	item.innerHTML = `
	<img src="./img/furn-images/1.JPG" alt="">
	<div class="item-frames">
		<div class="item-info-frame">
			<p>Наименование: <span>Наименование</span></p>
			<p>Материалы: <span>Материалы</span></p>
			<p>Информация: <span>Информация</span></p>
		</div>
		<div class="item-btns-frame">
			<p>Цена: <span>от 26850</span><span>19 990 м./п</span></p>
			<button class="btn">Рассчитать стоимость</button>
		</div>
	</div>
	`;

	return item;
}

function fillProbuctionBlock(quantity) {
	for (let i = 0; i < quantity; i++) {
		prodBlock.appendChild(createProdElement())
	}
}

fillProbuctionBlock(9)