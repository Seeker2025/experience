// DOM Модуль 7. Занятие 14. События (17.09)
// DOM event Listener. Box like hover

const boxRef = document.querySelector('.js-box');
// const box = document.querySelector('.box');

boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);

function onMouseEnter(event){
    const box = event.currentTarget;
    box.classList.add('box__active');
}

function onMouseLeave(event) {
    const box = event.currentTarget;
    box.classList.remove('box__active');
}





