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

//---------------------ДЗ МОДУЛЬ 4---------------------

const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const OFFER_TIMES = ['12:00', '13:00', '14:00'];

const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const OFFER_PHOTOS_ADDRESS = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';

const OFFER_PHOTOS = [
  `${OFFER_PHOTOS_ADDRESS}duonguyen-8LrGtIxxa4w.jpg`,
  `${OFFER_PHOTOS_ADDRESS}brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${OFFER_PHOTOS_ADDRESS}claire-rendall-b6kAwr1i0Iw.jpg`,
];

const AVATAR_COUNT = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

const offerRooms = {
  MIN: 1,
  MAX: 3,
};

const offerGuests = {
  MIN: 1,
  MAX: 3,
};

const offerPrice = {
  MIN: 1000,
  MAX: 10000,
};

const offerLocationLat = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const offerLocationLng = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const getRandomArrayElement = (elements) => elements[getRandomIntFromRange(0, elements.length - 1)];

const getAvatarAddress = () => `img/avatars/user${getRandomArrayElement(AVATAR_COUNT)}.png`;

const createAdvertisement = () => (
  {
    offer: {
      title: 'Предложение',
      address: `${getRandomFromRange(offerLocationLat.MIN, offerLocationLat.MAX, 5)}, ${getRandomFromRange(offerLocationLng.MIN, offerLocationLng.MAX, 5)}`,
      price: getRandomIntFromRange(offerPrice.MIN, offerPrice.MAX),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomIntFromRange(offerRooms.MIN, offerRooms.MAX),
      guests: getRandomIntFromRange(offerGuests.MIN, offerGuests.MAX),
      checkin: getRandomArrayElement(OFFER_TIMES),
      checkout: getRandomArrayElement(OFFER_TIMES),
      features: OFFER_FEATURES.slice(getRandomIntFromRange(1, 6)),
      description: 'Описание',
      photos: OFFER_PHOTOS.slice(getRandomIntFromRange(1, 3)),
    },
    author: {
      avatar: getAvatarAddress(),
    },
    offerLocation: {
      lat: getRandomFromRange(offerLocationLat.MIN, offerLocationLat.MAX, 5),
      lng: getRandomFromRange(offerLocationLng.MIN, offerLocationLng.MAX, 5),
    },
  }
);

const similarAdvertisements = Array.from({length: 10}, createAdvertisement);

// eslint-disable-next-line
console.log(similarAdvertisements);
