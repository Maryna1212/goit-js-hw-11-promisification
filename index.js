// Task 1
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved"
// через ms миллисекунд.Значением исполнившегося промиса должно быть то кол - во миллисекунд 
// которое передали во время вызова функции delay.

// const delay = ms => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(ms), ms);
//     });
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// Task 2
// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback,
// а принимала всего два параметра allUsers и userName и возвращала промис.

