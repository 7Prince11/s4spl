//Timer fields 
var hoursElement = document.querySelector('.hours');
var minutesElement = document.querySelector('.minutes');
var secondsElement = document.querySelector('.seconds');
var milisecondsElement = document.querySelector('.miliseconds');
//Bottons
var startButton = document.querySelector('.start');
var pauseButton = document.querySelector('.pause');
var stopButton = document.querySelector('.stop');
//ListerEvents
startButton.addEventListener('click', function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});
pauseButton.addEventListener('click', function () {
    clearInterval(interval);
});
stopButton.addEventListener('click', function () {
    clearInterval(interval);
    clearFields();
});
//Variables
var hours = 0, minutes = 0, seconds = 0, miliseconds = 0, interval;
function startTimer() {
    miliseconds++;
    //Miliseconds
    if (miliseconds < 9) {
        milisecondsElement.innerText = "0" + miliseconds;
    }
    if (miliseconds > 9) {
        milisecondsElement.innerText = miliseconds;
    }
    if (miliseconds > 99) {
        seconds++;
        secondsElement.innerText = "0" + seconds;
        miliseconds = 0,
            milisecondsElement.innerText = "0" + miliseconds;
    }
    //Seconds
    if (seconds < 9) {
        secondsElement.innerText = "0" + seconds;
    }
    if (seconds > 9) {
        secondsElement.innerText = seconds;
    }
    if (seconds > 59) {
        minutes++;
        minutesElement.innerText = "0" + minutes;
        seconds = 0;
        secondsElement.innerText = "0" + seconds;
    }
    //Minutes
    if (minutes > 9) {
        minutesElement.innerText = minutes;
    }
    //Hours
    if (hours > 9) {
        minutesElement.innerText = hours;
    }
}
function clearFields() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    milisecondsElement.textContent = "00";
}
