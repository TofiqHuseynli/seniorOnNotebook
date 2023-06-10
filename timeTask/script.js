let hour = document.querySelector('.hour-text');
let minute = document.querySelector('.minute-text');
let second = document.querySelector('.second-text');

function timeMeature() {
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();

    if (currentSecond < 10) {
        second.innerHTML = '0' + currentSecond;
    } else {
        second.innerHTML = currentSecond;
    };

    if (currentMinute < 10) {
        minute.innerHTML = '0' + currentMinute;
    } else {
        minute.innerHTML = currentMinute;
    };

    if (currentHour < 10) {
        hour.innerHTML = '0' + currentHour;
    } else {
        hour.innerHTML = currentHour;
    };


}


setInterval(timeMeature, 1000)