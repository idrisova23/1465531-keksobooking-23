import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement} from './util.js';

const ADVERT_COUNT = 1;
const AVATAR_MIN = 1;
const AVATAR_MAX = 10;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const DECIMAL_POINT = 5;
const TITLE = 'Милая, уютная квартирка в центре Токио';
const DESCRIPTION = 'Вашему вниманию представляется современная уютная квартира в престижном районе Токио';
const COST_MIN = 800;
const COST_MAX = 1200;
const TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};
const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const arrayOfAvatars = [];

const getNewArrayElements = (elements) => elements.slice(getRandomPositiveInteger(0, elements.length - 1));

for (let i = AVATAR_MIN; i <= AVATAR_MAX; i++) {
  const str = `img/avatars/user${i < AVATAR_MAX ? '0' : ''}${i}.png `;
  arrayOfAvatars.push(str);
}

const generateLocation = () => ({
  lat: getRandomPositiveFloat(LAT_MIN, LAT_MAX, DECIMAL_POINT),
  lng: getRandomPositiveFloat(LNG_MIN, LNG_MAX, DECIMAL_POINT),
});

const generateOffer = () => {
  const coordinates = generateLocation();

  return {
    author: {
      avatar: arrayOfAvatars.shift(),
    },
    offer: {
      title: TITLE,
      address: `${coordinates.lat}, ${coordinates.lng}`,
      price: getRandomPositiveInteger(COST_MIN, COST_MAX),
      type: getRandomArrayElement(Object.keys(TYPES)),
      rooms: getRandomPositiveInteger(1, 5),
      guests: getRandomPositiveInteger(1, 10),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getNewArrayElements(FEATURES),
      description: DESCRIPTION,
      photos: getNewArrayElements(PHOTOS),
    },
    location: {
      lat: coordinates.lat,
      lng: coordinates.lng,
    },
  };
};

const generateOffers = () => new Array(ADVERT_COUNT).fill(null).map(() => generateOffer());

export {generateOffers, TYPES};