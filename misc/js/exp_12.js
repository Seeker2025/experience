// Event Delegation
//Модуль 8. Занятие 15. Делегирование событий(21/09)

const colors = [
    { hex: '#f44336', rgb: '244,67,54', },
    { hex: '#C63E68', rgb: '198,62,104', },
    { hex: '#AC1E9E', rgb: '172,30,15', },
    { hex: '#3AE779', rgb: '58,231,121', },
    { hex: '#BE4B57', rgb: '190,75,87', },
    { hex: '#550943', rgb: '85,9,67', },
    { hex: '#B7E8EE', rgb: '183,232,238', },
    { hex: '#A0F00E', rgb: '160,240,14', },
    { hex: '#4F1AC5', rgb: '79,26,197', },
    { hex: '#657E3E', rgb: '101,126,62', },
];

const paletteContainer = document.querySelector('.js-palette');// big container
const cardsMarkup = createColorCardsMarkup(colors);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);//place into big container

// здесь функция рендерит всю разметку
function createColorCardsMarkup(colors) {
    return colors
        .map(({hex, rgb}) => {
        return `
        <div class="color-card">
        <div 
        class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style = "background-color: ${hex}"
        ></div>

        <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
        </div>
        </div>
     `;

    }).join('');
    // console.log(markup);
}

console.log(createColorCardsMarkup(colors));

paletteContainer.addEventListener('click', onPalleteContainerClick)// add listener на родительский контейнер 

function onPalleteContainerClick(evt) {
    // метод contains проверяет наличие класса на элементе
    //если нету класса .color-swatch, то мы от сюда выходим

    if (!evt.target.classList.contains('color-swatch')) {
        return;
    }

    //по click добавляем .is-active на div.color-card 
    //тоже самое делает функция removeActiveCardClass();

    // const currentActiveCard = document.querySelector('.color-card.is-active');
    //     if (currentActiveCard) {
    //         currentActiveCard.classList.remove('is-active');
    //     }

    removeActiveCardClass();

    //click по иконке получаем значение hex
    // console.log(evt.target.dataset.hex);
    //evt.target элемент по которому был click
    const swatchEl = evt.target;
    //closest идёт вверх по вложенности от swatchE до родительского тэга с классом .is-active
    const parentColorCard = swatchEl.closest('.color-card');

    
    //по click добавляем .is-active на div.color-card 

    //тоже самое делает функция  addActiveCardClass(parentColorCard);
    // parentColorCard.classList.add('is-active');

    addActiveCardClass(parentColorCard);
    
    //добавляем текущий цвет на body
    //тоже самое делает функция  setBodyBgColor(color)
    
    // document.body.style.backgroundColor = swatchEl.dataset.hex;

    setBodyBgColor(swatchEl.dataset.hex);
}


//добавляем текущий цвет на body
function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
}


//находим и выделяем класс .is-active, если он есть. Затем удаляем с него .is-active
function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');
    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }
}


//по click добавляем .is-active на div.color-card  
function addActiveCardClass(card) {
    card.classList.add('is-active');
}

  


//===============================================================================>

// //join преобразуем массив в строку. Можно добавить разделитель
// const arr = ['a', 'b', 'c', 'd'];
// console.log(arr);
// const str = arr.join('ыыы ');
// console.log(str);
// console.log(typeof(str));