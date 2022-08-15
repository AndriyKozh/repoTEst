import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  timerEl: document.querySelector('.timer'),
  button: document.querySelector('button[data-start]'),
  inputEl: document.querySelector('#datetime-picker'),

  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};

const dateEl = new Date();
const dateElNumb = dateEl.getTime();
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectTimes = selectedDates[0].getTime();

    if (selectedDates[0] > dateElNumb) {
      console.log(selectedDates[0]);
      refs.button.removeAttribute('disabled', true);
    } else {
      Notiflix.Notify.failure('Please choose date in future');
      refs.button.setAttribute('disabled', true);
    }

    refs.button.addEventListener('click', () => {
      timerId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = selectTimes - currentTime;

        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        console.log(`${days},${hours},${minutes},${seconds}`);
        refs.daysEl.textContent = `${days}`;
        refs.hoursEl.textContent = `${hours}`;
        refs.minutesEl.textContent = `${minutes}`;
        refs.secondsEl.textContent = `${seconds}`;
        if (deltaTime <= 1000) {
          clearInterval(timerId);
        }
      }, 1000);
    });
  },
};

flatpickr(refs.inputEl, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
