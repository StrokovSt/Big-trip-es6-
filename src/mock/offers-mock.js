import {getRandomIntegerNumber, getRandomArrayItem, getRandomMixedArray} from "../utils/sup-functions.js";
import {serverOffers} from "../utils/const.js";

const generateOffers = (count) => {
  const offersArray = getRandomMixedArray(serverOffers, count);
  return offersArray;
};

export {generateOffers};
