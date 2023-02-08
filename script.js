const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");

const tomorrowMS = new Date("2023-02-09 9:30").getTime();

const TimerCountdown = setInterval(PrintTimeLeft, 1000);

PrintTimeLeft();

function PrintTimeLeft() {
    // data oggi in ms
    const nowMS = new Date().getTime();

    // data oggi ms - data countdown ms
    const timer = tomorrowMS - nowMS;

    let seconds = Math.floor((timer % (1000 * 60)) / 1000);
    let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(timer / (1000 * 60 * 60 * 24));

    //fermo il timer
    if (timer < 0) {
        stopCounter();
    }

    secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
    daysEl.innerHTML = days < 10 ? "0" + days : days;
}
