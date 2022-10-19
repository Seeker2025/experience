// DOM buttons 02
//Модуль 7. Занятие 13. Объектная модель документа (DOM)(14/09)

// const colorPickerOption = [
//     { label: 'red', color: '#F53F2D', },
//     { label: 'green', color: '#128754', },
//     { label: 'blue', color: '#574DE3', },
//     { label: 'yellow', color: '#FACC32', },
// ];

// const bigBlock = document.querySelector('.js-color-picker');// взяли родительский бокс

// const toMakeBigButtonBlock = function(arrayOb) {
//         return arrayOb.map((obj) => {
//         const newButton = document.createElement('button');
//         newButton.type = 'button';
//         newButton.classList.add('new_block');
//         newButton.style.width = '180px';
//         newButton.style.height = '80px';
//         newButton.style.backgroundColor = obj.color;
//         newButton.textContent = obj.label;
//         newButton.style.fontSize = '26px';
//         newButton.style.marginLeft = '26px';
//         newButton.style.marginTop = '26px';

//         return newButton;

//     });
    
// }

// const elem = toMakeBigButtonBlock(colorPickerOption);
    
// bigBlock.append(...elem);// распыляем новый массив в родительский бокс

// ==============================================================================================

// создаём статью

/* <article class="product">
	<h2 class="product__name">Название</h2>
	<p class="product__desc">Описание</p>
	<p class="product__price">Цена 1111 кредитов</p>
</article> */


const product = {
    name: 'Сервоприводы',
    description: 'Lorem, ipsum',
    price: '2000',
    available: true,
    onSale: true,
};

const productEl = document.createElement('article');//создаём статью
productEl.classList.add('product');//добавляем класс к статье
const bigBlockTwo = document.querySelector('.big_block_two');// родительский блок
bigBlockTwo.append(productEl);//помещаем статью в родительский блок

productEl.style.backgroundColor = 'maroon'//цвет родительского блока


const makeProductCard = (product) => {

    const nameEl = document.createElement('h2');
    nameEl.textContent = product.name;
    nameEl.classList.add('product__name');

    const descEl = document.createElement('p');
    descEl.textContent = product.description;
    descEl.classList.add('product__desc');
    descEl.style.color = '#fff';

    const priceEl = document.createElement('p');
    priceEl.textContent = `Цена ${product.price} кркедитов`;
    priceEl.classList.add('product__price');
    priceEl.style.color = 'gold';

    productEl.append(nameEl, descEl, priceEl); // добавляем в родительский бокс три элемента за одну операцию

    return productEl;
};
// Функция создаёт статью. Вызываем функцию три раза
console.log(makeProductCard(product));
console.log(makeProductCard(product));
console.log(makeProductCard(product));

