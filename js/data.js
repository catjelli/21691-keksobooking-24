import {getAvatarAddress, getRandomArrayElement, getRandomFromRange, getRandomIntFromRange} from './util';

const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const OFFER_TIMES = ['12:00', '13:00', '14:00'];

const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const OFFER_PHOTOS_ADDRESS = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';

const OFFER_PHOTOS = [
  `${OFFER_PHOTOS_ADDRESS}duonguyen-8LrGtIxxa4w.jpg`,
  `${OFFER_PHOTOS_ADDRESS}brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${OFFER_PHOTOS_ADDRESS}claire-rendall-b6kAwr1i0Iw.jpg`,
];

const OfferRooms = {
  MIN: 1,
  MAX: 3,
};

const OfferGuests = {
  MIN: 1,
  MAX: 3,
};

const OfferPrice = {
  MIN: 1000,
  MAX: 10000,
};

const LocationLat = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const LocationLng = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const createAdvertisement = (currentItem, index) => {
  const lat = getRandomFromRange(LocationLat.MIN, LocationLat.MAX, 5);
  const lng = getRandomFromRange(LocationLng.MIN, LocationLng.MAX, 5);

  return {
    offer: {
      title: 'Предложение',
      address: `${lat}, ${lng}`,
      price: getRandomIntFromRange(OfferPrice.MIN, OfferPrice.MAX),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomIntFromRange(OfferRooms.MIN, OfferRooms.MAX),
      guests: getRandomIntFromRange(OfferGuests.MIN, OfferGuests.MAX),
      checkin: getRandomArrayElement(OFFER_TIMES),
      checkout: getRandomArrayElement(OFFER_TIMES),
      features: OFFER_FEATURES.slice(getRandomIntFromRange(1, 6)),
      description: 'Описание',
      photos: OFFER_PHOTOS.slice(getRandomIntFromRange(1, 3)),
    },
    author: {
      avatar: getAvatarAddress(index),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};

export {createAdvertisement};
