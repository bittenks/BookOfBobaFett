const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newDate = "1 Dec 2021";

function countdown() {
    const newYearsDate = new Date(newDate);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
// 0 aparecer a esquerda dos numeros fazendo ficar em duas casas : 03 02 01
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// chamada inicial 
countdown();

setInterval(countdown, 1000);
