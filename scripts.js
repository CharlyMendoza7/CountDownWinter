const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const winter = 'November 22, 2022';

function countdown() {
    const winterDate = new Date(winter);
    const currentDate = new Date();
    const totalSeconds =(winterDate-currentDate)/1000;
    
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%60;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60
    console.log(days, hours, minutes, seconds)

    daysElement.innerHTML = formatDigits(days);
    hoursElement.innerHTML = formatDigits(hours);
    minutesElement.innerHTML = formatDigits(minutes);
    secondsElement.innerHTML = formatDigits(seconds);
}

function formatDigits(x) {
    return x < 10 ? `0${x}` : x;
}
//initial call
countdown();

//interval to call every second
setInterval(countdown, 1000)
