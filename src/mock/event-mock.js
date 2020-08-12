import {getRandomIntegerNumber, getRandomArrayItem, getRandomMixedArray} from "../utils/sup-functions.js";
import {types, routDescription, cities, ratingList} from "../utils/const.js";

const generateEvent = (item, id) => {
  const price = getRandomIntegerNumber(10, 50);

  const startTime = new Date();
  const startTimeHours = startTime.getHours();
  const endTime = new Date();
  endTime.setHours(startTimeHours + getRandomIntegerNumber(1, 8));
  endTime.setMinutes(getRandomIntegerNumber(1, 55));

  const destination = getRandomArrayItem(cities);
  const type = getRandomArrayItem(types);

  return {
    price,
    startTime,
    endTime,
    destination,
    id,
    isFavorite: Math.random() > 0.5,
    offers: null,
    type
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};
