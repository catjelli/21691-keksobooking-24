const getRandomIntFromRange = (min, max) => {
  if (max > min && max >= 0 && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return Error('Неверный аргумент');
};

const getRandomFromRange = (min, max, digits) => {
  if (max > min && max >= 0 && min >= 0 && digits >= 0) {
    const randomFromRange = Math.random() * (max - min) + min;
    return +randomFromRange.toFixed(digits);
  }
  return Error('Неверный аргумент');
};

const getRandomArrayElement = (elements) => elements[getRandomIntFromRange(0, elements.length - 1)];

const getAvatarAddress = (i) => `img/avatars/user${i < 10 ? `0${i}` : i}.png`;

export {getRandomIntFromRange, getRandomFromRange, getRandomArrayElement, getAvatarAddress};
