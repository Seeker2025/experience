// Time

// const date = new Date();
// console.log(date);
// console.log(typeof (date));

// =============================================
// Interval

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
const textP = document.querySelector(".text_p");
let timerId = null;

startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        console.log(`I love async JS!  ${Math.random()}`);
        textP.textContent = `I love async JS!  ${Math.random()}`;
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    console.log(`Interval with id ${timerId} has stopped!`);
});

