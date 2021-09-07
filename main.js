
let ngay = document.getElementById('days')
let gio = document.getElementById('hours')
let phut = document.getElementById('mins')
let giay = document.getElementById('seconds')

const newYears = '1 Jan 2022';



function countdown(){
	const newYearsDate = new Date(newYears);
	const currentDate = new Date();

	const totalSeconds = (newYearsDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds /3600) %24;
	const minutes = Math.floor(totalSeconds / 60) %60;
	const seconds = Math.floor(totalSeconds) % 60;

	ngay.innerHTML = days;
	gio.innerHTML = hours;
	phut.innerHTML = minutes;
	giay.innerHTML = seconds;
}

countdown();

setInterval(countdown,1000);




