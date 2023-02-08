const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");

// ESEMPIO 1: PASTA
// titleEl.innerHTML = "Butta la pasta!";
// let secondsPasta = 12;
// const clockPasta = setInterval(buttaLaPasta, 1000);

// function buttaLaPasta() {
// 	if (secondsPasta >= 0) {
// 		secondsEl.innerHTML = (secondsPasta < 10) ? '0' + secondsPasta : secondsPasta;
// 		secondsPasta--;

// 	} else {
// 		clearInterval(clockPasta);
// 		alert("BUTTA LA PASTA!!")
// 	}
// }

// ESEMPIO 2: CRONOMETRO
// titleEl.innerHTML = "Cronometro";
// let totalSeconds = 100000;
// const clockCronometro = setInterval(stampaTempoTrascorso, 1000);
// stampaTempoTrascorso();
// function stampaTempoTrascorso() {
// 	++totalSeconds;

// 	const seconds = totalSeconds % 60;
// 	const minutes = parseInt((totalSeconds / 60) % 60);
// 	const hours = parseInt((totalSeconds / 60 / 60) % 24);
// 	const days = parseInt((totalSeconds / 60 / 60 / 24));

// 	secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
// 	minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
// 	hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
// 	daysEl.innerHTML = (days < 10) ? "0" + days : days;
// }

// ESEMPIO 3: OROLOGIO
// stampaOraAttuale()
// const clockOrologio = setInterval(stampaOraAttuale, 1000);
// titleEl.innerHTML = "Orologio";
// function stampaOraAttuale() {
// 	const now = new Date();

// 	const seconds = now.getSeconds() // Get the second (0-59)
// 	const minutes = now.getMinutes() // Get the minute (0-59)
// 	const hours = now.getHours() //Get the hour (0-23)
// 	const days = now.getDay() // Get the day as number (0-6)

// 	secondsEl.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
// 	minutesEl.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
// 	hoursEl.innerHTML = (hours < 10) ? "0" + hours : hours;
// 	daysEl.innerHTML = (days < 10) ? "0" + days : days;
// }

// ESEMPIO 4: DATES MILLISECONDS
// const now = new Date();
// const tomorrow = new Date("2023-02-04 12:00");

// console.log("today: " + now.getTime());
// console.log("tomorrow: " + tomorrow.getTime());