let hourDiv = document.querySelector('.hour');
let minuteDiv = document.querySelector('.minute');
let secondDiv = document.querySelector('.second');
let hour = document.querySelector('.hour-text');
let minute = document.querySelector('.minute-text');
let second = document.querySelector('.second-text');


let currentHour = prompt("Enter hour");
let currentMinute = prompt("Enter minute");
let currentSecond = prompt("Enter second");

currentMinute = Number(currentMinute);
currentSecond = Number(currentSecond);
currentHour = Number(currentHour);

if (currentHour <0 || currentHour >23 || currentMinute < 0 || currentMinute > 59 || 
     currentSecond < 0 || currentSecond > 60 || isNaN(currentMinute) || isNaN(currentSecond) 
     || currentHour =="" || currentMinute =="" || currentSecond =="") {
    window.alert("Duzgun daxil et")
} else {


    function timeMeature() {


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




        if (!(currentSecond <= 0)) {
            currentSecond--;
            console.log(currentSecond)

        } else if (currentSecond == 0) {
            if (currentMinute > 0) {
                currentMinute = currentMinute - 1;
            } else if (currentMinute == 0 && currentSecond == 0) {
                clearInterval(interval);
                hour.style.color = "white"
                minute.style.color = "white"
                second.style.color = "white"
                hourDiv.style.backgroundColor = "red"
                minuteDiv.style.backgroundColor = "red"
                secondDiv.style.backgroundColor = "red"


            }

            currentSecond = 60;

        };

        if (currentMinute == 0) {
            currentMinute = 0;
        }




    }















}


let interval = setInterval(timeMeature, 1000)
