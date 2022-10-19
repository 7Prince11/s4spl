

const hoursElement: any = document.querySelector('.hours');
const minutesElement: any = document.querySelector('.minutes');
const secondsElement: any = document.querySelector('.seconds');
const milisecondsElement: any = document.querySelector('.miliseconds');



const startButton: any = document.querySelector('.start');
const pauseButton: any = document.querySelector('.pause');
const stopButton: any = document.querySelector('.stop');



startButton.addEventListener('click', () => {
    clearInterval(interval);

    interval = setInterval(startTimer, 10);
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval);
})

stopButton.addEventListener('click', () => {

    clearInterval(interval);
    clearFields();


})







let hours: number = 0o0, minutes: number = 0o0, seconds: number = 0o0, miliseconds: number = 0o0, interval: any;


function startTimer() {

    miliseconds++;


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
        secondsElement.innerText = "0" + seconds

    }



    if (minutes > 9) {
        minutesElement.innerText = minutes;
    }




    if (hours > 9) {
        minutesElement.innerText = hours;
    }

}

function clearFields() {
    hours = 0o0
    minutes = 0o0
    seconds = 0o0
    miliseconds = 0o0
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    milisecondsElement.textContent = "00";
}