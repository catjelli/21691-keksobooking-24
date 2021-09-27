const getRandomIntFromRange = function (min, max) {
  if (max > min && max >= 0 && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Неверный аргумент';
};
//Источник: https://myrusakov.ru/js-random-numbers.html

const getRandomFromRange = function (min, max, digits) {
  if (max > min && max >= 0 && min >= 0 && digits >= 0) {
    const randomFromRange = Math.random() * (max - min) + min;
    return +randomFromRange.toFixed(digits);
  }
  return 'Неверный аргумент';
};
//Источник: https://learn.javascript.ru/number#okruglenie

getRandomFromRange(1, 57, 5);

getRandomIntFromRange(57, 79);
