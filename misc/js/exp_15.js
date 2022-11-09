const NOTIFICATION_DELAY = 2000;
let timeoutId = null;
const refs = {
    notification: document.querySelector('.js-alert'),// little green box
};

refs.notification.addEventListener('click', onNotificationClick); //add listener 

showNotification(); // This function always little green box is showing

//при клике скрываем бокс и отменяем интервал setTimeout
function onNotificationClick() {
    hideNotification();
    clearTimeout(timeoutId);
    console.log('It was a click!');
}


function showNotification() {
    refs.notification.classList.add('is-visible');
    timeoutId = setTimeout(() => {
        console.log('To close little green box automatically');
        console.log(timeoutId);
        hideNotification();

    }, NOTIFICATION_DELAY);
}

// This function hides little green box by your click
function hideNotification() {
    refs.notification.classList.remove('is-visible');
    
}