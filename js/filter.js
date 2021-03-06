const HOUSE_PRICE_MIN = 10000;
const HOUSE_PRICE_MAX = 50000;

const mapForm = document.querySelector('.map__filters');
const houseFilter = mapForm.querySelector('#housing-type');
const roomFilter = mapForm.querySelector('#housing-rooms');
const priceFilter = mapForm.querySelector('#housing-price');
const guestFilter = mapForm.querySelector('#housing-guests');
const featuresFilter = mapForm.querySelector('#housing-features');

const filterByPrice = (item) => {
  switch (priceFilter.value) {
    case 'middle':
      return item.offer.price >= HOUSE_PRICE_MIN && item.offer.price <= HOUSE_PRICE_MAX;

    case 'low':
      return item.offer.price < HOUSE_PRICE_MIN;

    case 'high':
      return item.offer.price > HOUSE_PRICE_MAX;

    default:
      return true;
  }
};

const filterByFeatures = (item) => {
  const selectedFeatures = [].map.call(featuresFilter.querySelectorAll('input:checked'), (input) => input.value);
  return selectedFeatures.every((feature) => item.offer.features !== undefined ? item.offer.features.includes(feature) : false);
};

const filter = (data) =>
  data.filter((item) => (houseFilter.value === 'any' || item.offer.type === houseFilter.value)
    && (roomFilter.value === 'any' || item.offer.rooms === +roomFilter.value)
    && filterByPrice(item)
    && (guestFilter.value === 'any' || item.offer.guests === +guestFilter.value)
    && filterByFeatures(item));

export {filter};
