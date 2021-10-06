const getRandomIntFromRange = function (min, max) {
  if (max > min && max >= 0 && min >= 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return Error('Неверный аргумент');
};

const getRandomFromRange = function (min, max, digits) {
  if (max > min && max >= 0 && min >= 0 && digits >= 0) {
    const randomFromRange = Math.random() * (max - min) + min;
    return +randomFromRange.toFixed(digits);
  }
  return Error('Неверный аргумент');
};

//---------------------ДЗ МОДУЛЬ 4---------------------

const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const OFFER_TIME = ['12:00', '13:00', '14:00'];

const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const offerPhotosAddress = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';

const OFFER_PHOTOS = [
  `${offerPhotosAddress}duonguyen-8LrGtIxxa4w.jpg`,
  `${offerPhotosAddress}brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${offerPhotosAddress}claire-rendall-b6kAwr1i0Iw.jpg`,
];

const AVATAR_COUNT = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']; //Оставила массив в соответствии с ДЗ

const getRandomArrayElement = function (elements) {
  return elements[getRandomIntFromRange(0, elements.length - 1)];
};

const getAvatarAddress = function () {
  return `img/avatars/user${getRandomArrayElement(AVATAR_COUNT)}.png`;
};

const offerLocation = {
  lat: getRandomFromRange(35.65000, 35.70000, 5),//широта, случайное значение от 35.65000 до 35.70000
  lng: getRandomFromRange(139.70000, 139.80000, 5),//долгота, случайное значение от 139.70000 до 139.80000
};

const author = {
  avatar: getAvatarAddress(),
};

const offer = {
  title: 'Предложение',
  address: `${offerLocation.lat}, ${offerLocation.lng}`,
  price: getRandomIntFromRange(1000, 100000),//Случайное целое положительное число.
  type: getRandomArrayElement(OFFER_TYPES),
  rooms: getRandomIntFromRange(1, 3),//Случайное целое положительное число.
  guests: getRandomIntFromRange(1, 3),//Случайное целое положительное число.
  checkin: getRandomArrayElement(OFFER_TIME),
  checkout: getRandomArrayElement(OFFER_TIME),
  features: OFFER_FEATURES.slice(getRandomIntFromRange(1, 6)),//массив случайной длины из значений OFFER_FEATURES.
  description: 'Описание',
  photos: OFFER_PHOTOS.slice(getRandomIntFromRange(1, 3)),//массив случайной длины из значений OFFER_PHOTOS
};

const createAdvertisement = function () {
  return {
    author: author,
    offer: offer,
    offerLocation: offerLocation,
  };
};

const similarAdvertisements = Array.from({length: 10}, createAdvertisement);
