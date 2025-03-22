//counter

//buttons
const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
};

const timer = {
    intervalId: null,
    isActive: false,

    start() {
        // если таймер активный (здесь true), то выходим из функции
        //if (this.isActive) {
        //    return;
        //}
        const startTime = Date.now(); 
        this.isActive = true;
        
        this.intervalId = setInterval(() => {
            const currentTime = Date.now(); 
            const deltaTime = currentTime - startTime   //разница между текущим и стартовым
            // console.log(currentTime - startTime);
            const time = getTimeComponents(deltaTime);
            // console.log(`${hours}:${mins}:${secs}`);
            updateClockface(time);
        }, 1000);
    },
        stop(){
            clearInterval(this.intervalId);
        },
 }; //obj timer
// метод добавляет цифры в параграф p.clockface
function updateClockface({ hours, mins, secs }) {
    refs.clockface.textContent = `${ hours }:${ mins }:${ secs }`;
}
// Метод преобразует число в строку и добавляет до двух символов '0' слева
function pad(value) {
    return String(value).padStart(2, '0');
    // 1 => 01
    // 7 => 07
    // 12=> 12
}
refs.startBtn.addEventListener('click', () => {
    timer.start();
});
refs.stopBtn.addEventListener('click', () => {
    timer.stop();
});
function getTimeComponents(time){
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
        
        return { hours, mins, secs };
        }
// timer.start();
