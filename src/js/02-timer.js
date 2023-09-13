import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const selectors = {
    startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const flatpickr = require('flatpickr');
flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) { 
        console.log(selectedDates[0]);
        const currentDate = new Date();
        if (selectedDates[0] < currentDate) {
            window.alert("Please choose a date in the future");
            selectors.startBtn.disabled = true;

        } else {
            selectors.startBtn.disabled = false;


        }
const timer = {
    start() {
        
        setInterval(() => {
            const startTime = selectedDates[0];
            const finishTime = Date.now();
            const deltaTime = startTime - finishTime;
            const { days, hours, minutes, seconds }
             = getTimeComponents(deltaTime);
            selectors.days.textContent = days;
            selectors.hours.textContent = hours;
            selectors.minutes.textContent = minutes;
            selectors.seconds.textContent = seconds;
            

        }, 1000);
    }

    
        };
        

        selectors.startBtn.addEventListener("click", () => {
            timer.start();
        });
        }
});
function pad(value) {
    return String(value).padStart(2, '0');
}
function getTimeComponents(time) {
    const milliseconds = Math.abs(time);
    const seconds = pad(Math.floor((milliseconds / 1000) % 60));
    const minutes = pad(Math.floor((milliseconds / (1000 * 60)) % 60));
    const hours = pad(Math.floor((milliseconds / (1000 * 60 * 60)) % 24));
 const days = pad(Math.floor(milliseconds / (1000 * 60 * 60 * 24)));
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}










