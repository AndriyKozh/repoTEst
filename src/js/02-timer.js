// import flatpickr from 'flatpickr';
// // Додатковий імпорт стилів
// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

// const refs = {
//   timerEl: document.querySelector('.timer'),
//   button: document.querySelector('button[data-start]'),
//   inputEl: document.querySelector('#datetime-picker'),

//   daysEl: document.querySelector('span[data-days]'),
//   hoursEl: document.querySelector('span[data-hours]'),
//   minutesEl: document.querySelector('span[data-minutes]'),
//   secondsEl: document.querySelector('span[data-seconds]'),
// };

// const dateEl = new Date();
// const dateElNumb = dateEl.getTime();
// let timerId = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     let selectTimes = selectedDates[0].getTime();

//     if (selectedDates[0] > dateElNumb) {
//       console.log(selectedDates[0]);
//       refs.button.removeAttribute('disabled', true);
//     } else {
//       Notiflix.Notify.failure('Please choose date in future');
//       refs.button.setAttribute('disabled', true);
//     }

//     refs.button.addEventListener('click', () => {
//       timerId = setInterval(() => {
//         const currentTime = Date.now();
//         const deltaTime = selectTimes - currentTime;

//         const { days, hours, minutes, seconds } = convertMs(deltaTime);
//         console.log(`${days},${hours},${minutes},${seconds}`);
//         refs.daysEl.textContent = `${days}`;
//         refs.hoursEl.textContent = `${hours}`;
//         refs.minutesEl.textContent = `${minutes}`;
//         refs.secondsEl.textContent = `${seconds}`;
//         if (deltaTime <= 1000) {
//           clearInterval(timerId);
//         }
//       }, 1000);
//       if (timerId) {
//         refs.inputEl.setAttribute('disabled', true);
//         refs.button.setAttribute('disabled', true);
//       }
//     });
//   },
// };

// flatpickr(refs.inputEl, options);

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// Notiflix
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button');
const daysContent = document.querySelector('[data-days]');
const hoursContent = document.querySelector('[data-hours]');
const minutesContent = document.querySelector('[data-minutes]');
const secondsContent = document.querySelector('[data-seconds]');
const input = document.querySelector('#datetime-picker');
startBtn.disabled = true;

flatpickr('#datetime-picker', {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const choosenTime = selectedDates[0].getTime();
    if (choosenTime > Date.now()) {
      startBtn.disabled = false;

      startBtn.addEventListener('click', () => {
        startBtn.disabled = true;
        let timerId = null;
        timerId = setInterval(() => {
          const cuerentTime = Date.now();
          const deltaTime = choosenTime - cuerentTime;
          const { days, hours, minutes, seconds } = convertMs(deltaTime);
          console.log(timerId);

          daysContent.textContent = `${days}`;
          hoursContent.textContent = `${hours}`;
          minutesContent.textContent = `${minutes}`;
          secondsContent.textContent = `${seconds}`;

          if (deltaTime <= 1000) {
            clearInterval(timerId);
          }
        }, 1000);
        if (timerId) {
          input.disabled = true;
        }
      });
    } else {
      Notiflix.Notify.failure('Please choose date in future');
    }
  },
});

// функція приймає число приводить до строки  і додає спереді 0 якщо число менше 2х знаків
function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
