// const promise = new Promise((resole, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resole('Good');
//     }
//     reject('проміс виконався з помилкою');
//   }, 500);
// });

// // promise.then(result => {
// //   console.log(`✅ ${result}`),
// //     error => {
// //       console.log(`❌ ${error}`);
// //     };
// // });
// function onFulfilled(result) {
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log(`❌ ${error}`);
// }

// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);
//     throw new Error('помилка в другому them');

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => {
//     console.log('я буду виконаний в любому випадку');
//   });

//ПРОМІСИФІКАЦІЯ....................................................

// const makeOrder = dish => {
//   const DELAY = 1000;
//   return new Promise((resolve, reject) => {
//     passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅  ось ваша страва ${dish}`);
//       }
//       reject('❌ вибачте закінчились продукти');
//     }, DELAY);
//   });
// };

// makeOrder('пиріжок').then(onMakeOrdenSucces).catch(onMakeOrdenError);

// function onMakeOrdenSucces(result) {
//   console.log('onMakeOrdenSucces');
//   console.log(result);
// }

// function onMakeOrdenError(error) {
//   console.log('onMakeOrdenError');
//   console.log(error);
// }

////////////////////////////////// FETCH зв'язок з сервером............

// const feachPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json()); // це проміс витягнутий з сервера
// };

// feachPokemonById(1).then(onFeachSucces).catch(onFeachError);
// feachPokemonById(12).then(onFeachSucces).catch(onFeachError);

// // feachPokemonById(2);

// function onFeachSucces(pokemon) {
//   console.log(pokemon);
// }

// function onFeachError(error) {
//   console.log(':smile  це блок cach');
//   console.log(error);
// }

/////// Забіг коней.............

// const horses = ['one', 'two', 'three', 'four', 'five', 'six'];

// console.log('Забіг розпочався');

// const promise = horses.map(run);
// console.log(promise);

// Promise.race(promise).then(({ horse, time }) => {
//   console.log(`Перемогла ${horse} закінчила забіг за ${time}`);
// });

// Promise.all(promise).then(() => {
//   console.log('Забіг закінчився, принімаємо ставки');
// });

// function run(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(2000, 3500);
//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }
// // run('Mango')
// //   .then(x => console.log(x))
// //   .catch(y => {
// //     console.log(y);
// //   });

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//-----------------------------------------------------------
// import Notiflix from 'notiflix';

// const form = document.querySelector('form');
// let firstDelay = 0;
// let stepDelay = 0;
// let amountVal = 0;
// let promiseDelay = firstDelay;

// // створюємо функцію проміс
// const createPromise = (position, delay) => {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         // Fulfill
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       }
//       // Reject
//       reject(`❌ Rejected promise ${position} in ${delay}ms`);
//     }, promiseDelay);
//   });
// };

// // додаємо слухач при кліку на сабміт
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const {
//     elements: { delay, step, amount },
//   } = event.currentTarget;

//   firstDelay = Number(delay.value);
//   stepDelay = Number(step.value);
//   amountVal = Number(amount.value);

//   for (let i = 0; i < amountVal; i++) {
//     let position = i + 1;
//     promiseDelay += stepDelay;

//     // при кліку  викликаємо проміс з кроком заданої затримки доданої до початкової

//     createPromise(position, promiseDelay)
//       .then(result => {
//         console.log(result);
//         Notiflix.Notify.success(result);
//       })
//       .catch(error => {
//         console.log(error);
//         Notiflix.Notify.failure(error);
//       });
//   }
// });

import Notiflix from 'notiflix';

// const refs = {
//   button: document.querySelector('button'),
//   formEl: document.querySelector('form'),
//   input: document.querySelector('input'),
// };

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         // Fulfill
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       }
//       // Reject
//       reject(`❌ Rejected promise ${position} in ${delay}ms`);
//     }, promiseMs);
//   });
// }

// let delayMs = 0;
// let stepMs = 0;
// let amountEl = 0;
// let promiseMs = delayMs;

// refs.formEl.addEventListener('submit', onPromisFn);

// function onPromisFn(ev) {
//   ev.preventDefault();
//   const {
//     elements: { delay, step, amount },
//   } = ev.currentTarget;

//   delayMs = Number(delay.value);
//   stepMs = Number(step.value);
//   amountEl = Number(amount.value);

//   for (let el = 0; el < amountEl; el += 1) {
//     let turnPos = el + 1;
//     promiseMs += stepMs;

//     createPromise(turnPos, promiseMs)
//       .then(res => {
//         Notiflix.Notify.success(res);
//       })
//       .catch(error => {
//         Notiflix.Notify.failure(error);
//       });
//   }
// }

// const form = document.querySelector('.form');

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       }
//       reject(`❌ Rejected promise ${position} in ${delay}ms`);
//     }, promEl);
//   });
// }

// let delayMs = 0;
// let stepMs = 0;
// let amountEl = 0;
// let promEl = delayMs;

// form.addEventListener('submit', onPromiseFn);

// function onPromiseFn(ev) {
//   ev.preventDefault();

//   const {
//     elements: { delay, step, amount },
//   } = ev.currentTarget;

//   delayMs = Number(delay.value);
//   stepMs = Number(step.value);
//   amountEl = Number(amount.value);

//   for (let el = 0; el < amountEl; el += 1) {
//     let promPosition = el + 1;
//     promEl += stepMs;

//     createPromise(promPosition, promEl)
//       .then(res => {
//         Notiflix.Notify.success(res);
//       })
//       .catch(error => {
//         Notiflix.Notify.failure(error);
//       });
//   }
// }

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('form');
const delayEl = document.querySelector('form [name=delay]');
const amountEl = document.querySelector('form [name=amount]');
const stepEl = document.querySelector('form [name=step]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let delay = Number(delayEl.value);

  for (let i = 1; i <= Number(amountEl.value); i += 1) {
    createPromise(i, delay).then(onSuccess).catch(onError);
    delay += Number(stepEl.value);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSuccess({ position, delay }) {
  Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}
function onError({ position, delay }) {
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}
