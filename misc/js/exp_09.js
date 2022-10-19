// DOM buttons 02

const colorPickerOption = [
    { label: 'red', color: '#F53F2D', },
    { label: 'green', color: '#128754', },
    { label: 'blue', color: '#574DE3', },
    { label: 'yellow', color: '#FACC32', },
];

const bigBlock = document.querySelector('.js-color-picker');// взяли родительский бокс

const toMakeBigButtonBlock = function(arrayOb) {
        return arrayOb.map((obj) => {
        const newButton = document.createElement('button');
        newButton.type = 'button';
        newButton.classList.add('new_block');
        newButton.style.width = '180px';
        newButton.style.height = '80px';
        newButton.style.backgroundColor = obj.color;
        newButton.textContent = obj.label;
        newButton.style.fontSize = '26px';
        newButton.style.marginLeft = '26px';
        newButton.style.marginTop = '26px';

        return newButton;

    });
    
}

const elem = toMakeBigButtonBlock(colorPickerOption);
    
bigBlock.append(...elem);// распыляем новый массив в родительский бокс

