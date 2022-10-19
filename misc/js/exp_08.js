    //Модуль 7. Занятие 13. Объектная модель документа (DOM)(14/09)
const colorPickerOption = [
    { label: 'red', color: '#F44336', },
    { label: 'green', color: '#4CAF50', },
    { label: 'blue', color: '#2196F3', },
    { label: 'gray', color: '#607D8B', },
    { label: 'pink', color: '#E91E63', },
    { label: 'indigo', color: '#3F51B5', },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.classList.add('color-picker__option');
// buttonEl.style.backgroundColor = option.color;
// buttonEl.textContent = option.label;
// buttonEl.style.width = '170px';
// buttonEl.style.height = '70px';

        //create many buttons

const makeColorPickerOption = options => {
    return options.map(option => {

        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.classList.add('color-picker__option');
        buttonEl.style.backgroundColor = option.color;
        buttonEl.textContent = option.label;
        buttonEl.style.width = '170px';
        buttonEl.style.height = '70px';
        buttonEl.style.fontSize = '24px';
        buttonEl.style.marginLeft = '8px';

        return buttonEl;
    });
}

const elements = makeColorPickerOption(colorPickerOption);
colorPickerContainerEl.append(...elements)// распыляем кнопку в родительский бокс