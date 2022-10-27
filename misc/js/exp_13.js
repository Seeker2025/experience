// Event Delegation

const colors = [
    { hex: '#fcba03', rgb: '252, 186, 3', },
    { hex: '#127805', rgb: '18, 120, 5', },
    { hex: '#780705', rgb: '120, 7, 5', },
    { hex: '#1c0578', rgb: '28, 5, 120', },
   
];
const primaryBigParentContainer = document.querySelector('.palette');   // to get big parent box

const cardsMarkup = toMakeLineColorSquare(colors);  // The function to const
primaryBigParentContainer.insertAdjacentHTML('beforeend', cardsMarkup);// place into get big parent box

// The function renders html markup
function toMakeLineColorSquare(colors) {
    return colors.map(({hex, rgb}) => {
        return `
    <div class="box">
        <div class="square__color"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}"
        ></div>
        <p class="par__text">rgb: ${rgb}</p>
    </div>
    `
    }).join('');
}

primaryBigParentContainer.addEventListener('click', toGetNewClass);

function toGetNewClass(evnt) {
    // метод contains проверяет наличие класса на элементе 
    if (!evnt.target.classList.contains('square__color')) {
        return;
    }
    // console.log(evnt.target.dataset.rgb);// клик по цвету возвращает значение rgb

    const swatchEl = evnt.target;// элемент на котором click
    
    //относительно элемента, на котором был клик движемся вверх до тэга с классом .box
    //присваиваем в объект parentColorCard. Дальше функция  addActiveCardClass в этот тэг
    //добавляет класс .is-active
    const parentColorCard = swatchEl.closest('.box');

    removeActiveCardClass();                //function remove
    addActiveCardClass(parentColorCard);
    
}

//This function add class .is-active to div.box
function addActiveCardClass(card) {
    card.classList.add('is-active');
}

//после click на div.box есть класс .is-active. Заносим его в currentActiveCard и удаляем с него .is-active
function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.box.is-active');
    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }
}
