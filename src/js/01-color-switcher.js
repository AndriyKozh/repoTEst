// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   choseDateInput: document.querySelector('input#datetime-picker'),
//   startBtn: document.querySelector('button[data-start]'),
//   daysField: document.querySelector('[data-days]'),
//   hoursField: document.querySelector('[data-hours]'),
//   minutesField: document.querySelector('[data-minutes]'),
//   secondsField: document.querySelector('[data-seconds]'),
// };
// let chosenDate = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] > Date.now()) {
//       chosenDate = selectedDates[0];

//       refs.startBtn.removeAttribute('disabled');
//       refs.startBtn.addEventListener('click', startCountdown, { once: true });
//       return;
//     }

//     Notify.failure('Please choose a date in the future');
//     refs.startBtn.setAttribute('disabled', '');
//   },
// };

// flatpickr(refs.choseDateInput, options);

// class Timer {
//   constructor({ onTick }) {
//     this.onTick = onTick;
//     this.isActive = false;

//     this.init();
//   }

//   init() {
//     const time = this.convertMs(chosenDate - Date.now());
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     this.isActive = true;

//     const intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = chosenDate - currentTime;

//       const time = this.convertMs(deltaTime);

//       this.onTick(time);
//       if (chosenDate <= currentTime) {
//         clearInterval(intervalId);
//         resetClockface();
//       }
//     }, 1000);
//   }

//   convertMs(time) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = this.pad(Math.floor(time / day));
//     // Remaining hours
//     const hours = this.pad(Math.floor((time % day) / hour));
//     // Remaining minutes
//     const minutes = this.pad(Math.floor(((time % day) % hour) / minute));
//     // Remaining seconds
//     const seconds = this.pad(
//       Math.floor((((time % day) % hour) % minute) / second)
//     );

//     return { days, hours, minutes, seconds };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// function updateClockface({ days, hours, minutes, seconds }) {
//   refs.daysField.textContent = `${days}`;
//   refs.hoursField.textContent = `${hours}`;
//   refs.minutesField.textContent = `${minutes}`;
//   refs.secondsField.textContent = `${seconds}`;
// }

// function startCountdown() {
//   const timer = new Timer({
//     onTick: updateClockface,
//   });
//   timer.start();

//   refs.startBtn.setAttribute('disabled', '');
//   refs.choseDateInput.setAttribute('disabled', '');
// }

// function resetClockface() {
//   refs.daysField.textContent = '00';
//   refs.hoursField.textContent = '00';
//   refs.minutesField.textContent = '00';
//   refs.secondsField.textContent = '00';
// }

// flatpickr
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// // Notiflix
// import Notiflix from 'notiflix';

// const startBtn = document.querySelector('button');
// const daysContent = document.querySelector('[data-days]');
// const hoursContent = document.querySelector('[data-hours]');
// const minutesContent = document.querySelector('[data-minutes]');
// const secondsContent = document.querySelector('[data-seconds]');
// const input = document.querySelector('#datetime-picker');
// startBtn.disabled = true;

// flatpickr('#datetime-picker', {
//   enableTime: true,
//   dateFormat: 'Y-m-d H:i',
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     const choosenTime = selectedDates[0].getTime();
//     if (choosenTime > Date.now()) {
//       startBtn.disabled = false;

//       startBtn.addEventListener('click', () => {
//         startBtn.disabled = true;
//         let timerId = null;
//         timerId = setInterval(() => {
//           const cuerentTime = Date.now();
//           const deltaTime = choosenTime - cuerentTime;
//           const { days, hours, minutes, seconds } = convertMs(deltaTime);
//           console.log(timerId);

//           daysContent.textContent = `${days}`;
//           hoursContent.textContent = `${hours}`;
//           minutesContent.textContent = `${minutes}`;
//           secondsContent.textContent = `${seconds}`;

//           if (deltaTime <= 1000) {
//             clearInterval(timerId);
//           }
//         }, 1000);
//         if (timerId) {
//           input.disabled = true;
//         }
// 	  })
// 		  ;

//     } else {
//       Notiflix.Notify.failure('Please choose date in future');
//     }
//   },
// });

// // функція приймає число приводить до строки  і додає спереді 0 якщо число менше 2х знаків
// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = pad(Math.floor(ms / day));
//   // Remaining hours
//   const hours = pad(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = pad(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }
