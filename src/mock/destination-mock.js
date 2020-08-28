import {getRandomArrayItem, getRandomIntegerNumber} from "../utils/sup-functions.js";
import {routDescription, cities} from "../utils/const.js";

const generateDestination = () => {
  const description = getRandomArrayItem(routDescription);
  const destination = getRandomArrayItem(cities);
  let pictures = generateList(getRandomIntegerNumber(0, 9), generatePicture);

  return {
    description: destination + ` ` + description,
    name: destination,
    pictures
  };
};

const generatePicture = () => {
  return {
    src: `http://picsum.photos/248/152?r=${Math.random()}`,
    description: `Random picture description`
  };
};

const generateList = (count, func) => {
  return new Array(count)
    .fill(``)
    .map(func);
};

export {generateDestination};
