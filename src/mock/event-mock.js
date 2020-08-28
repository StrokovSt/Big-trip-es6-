import {getRandomIntegerNumber, getRandomArrayItem} from "../utils/sup-functions.js";
import {types} from "../utils/const.js";
import {generateDestination} from "./destination-mock.js";
import {generateOffers} from "./offers-mock.js";

const generateEvent = (item, id) => {
  const price = getRandomIntegerNumber(10, 50);
  const month = getRandomIntegerNumber(8, 9);
  const day = getRandomIntegerNumber(15, 21);

  const startTime = new Date(2020, month, day);
  const startTimeHours = startTime.getHours();
  const endTime = new Date(2020, month, day);
  endTime.setHours(startTimeHours + getRandomIntegerNumber(0, 8));
  endTime.setMinutes(getRandomIntegerNumber(1, 55));

  const destination = generateDestination();
  const type = getRandomArrayItem(types);
  const offers = generateOffers(getRandomIntegerNumber(0, 3));

  return {
    price,
    startTime,
    endTime,
    destination,
    id,
    isFavorite: Math.random() > 0.5,
    offers,
    type
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};
