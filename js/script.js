const prodVBlock = document.getElementById('prod-collection');

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
		prodVBlock.appendChild(createProdElement())
	}
}

fillProbuctionBlock(9)