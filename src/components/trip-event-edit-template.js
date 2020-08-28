import AbstractComponent from "./abstract-component.js";
import {getTimeFromMins} from "../utils/sup-functions.js";

// в будущем это серверные данные
import {cities, serverOffers} from "../utils/const.js";

import moment from "moment";

const createDestinationOption = (option) => {
  return (
    `<option value="${option}"></option>`
  );
};

const createEventHeader = (price, startTime, endTime, type, destination, isFavorite, id) => {

  const createDestinationOptions = (options) => {
    const destinationOptionsMarkup = options.map((option) => `${createDestinationOption(option)}`).join(`\n`);
    return destinationOptionsMarkup;
  };

  const destinationOptionsMarkup = createDestinationOptions(cities);

  return (
    `<header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Transfer</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${type.toLowerCase() === `taxi` ? `checked` : ``}>
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-${id}">Taxi</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-bus-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${type.toLowerCase() === `bus` ? `checked` : ``}>
              <label class="event__type-label  event__type-label--bus" for="event-type-bus-${id}">Bus</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-train-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${type.toLowerCase() === `train` ? `checked` : ``}>
              <label class="event__type-label  event__type-label--train" for="event-type-train-${id}">Train</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-ship-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${type.toLowerCase() === `ship` ? `checked` : ``}>
              <label class="event__type-label  event__type-label--ship" for="event-type-ship-${id}">Ship</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-transport-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport" ${type.toLowerCase() === `transport` ? `checked` : ``}>
              <label class="event__type-label  event__type-label--transport" for="event-type-transport-${id}">Transport</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-drive-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${type.toLowerCase() === `drive` ? `checked` : ``}>
              <label class="event__type-label  event__type-label--drive" for="event-type-drive-${id}">Drive</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-flight-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${type.toLowerCase() === `flight` ? `checked` : ``}>
              <label class="event__type-label  event__type-label--flight" for="event-type-flight-${id}">Flight</label>
            </div>
          </fieldset>

          <fieldset class="event__type-group">
            <legend class="visually-hidden">Activity</legend>

            <div class="event__type-item">
              <input id="event-type-check-in-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${type.toLowerCase() === `check-in` ? `checked` : ``}>
              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-${id}">Check-in</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-sightseeing-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${type.toLowerCase() === `sightseeing` ? `checked` : ``}>
              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-${id}">Sightseeing</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-restaurant-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ${type.toLowerCase() === `restaurant` ? `checked` : ``}>
              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-${id}">Restaurant</label>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-${id}">
          ${type} to
        </label>
        <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${destination.name}" list="destination-list-${id}">
        <datalist id="destination-list-${id}">
          ${destinationOptionsMarkup}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-${id}">
          From
        </label>
        <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value="${moment(startTime).format(`D/M/YY`)} ${moment(startTime).format(`HH:mm`)}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-${id}">
          To
        </label>
        <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value="${moment(endTime).format(`D/M/YY`)} ${moment(endTime).format(`HH:mm`)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-${id}">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value="${price}" readonly>
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>

      <input id="event-favorite-${id}" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" ${isFavorite ? `checked` : ``}>
      <label class="event__favorite-btn" for="event-favorite-${id}">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </label>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>`
  );
};

const createEventOffer = (typeOffer, offers, id) => {
  const isOfferChecked = (offers.includes(typeOffer)) ? `checked` : ``;
  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="${typeOffer.title}-${id}" type="checkbox" name="${typeOffer.title}" ${isOfferChecked}>
      <label class="event__offer-label" for="${typeOffer.title}-${id}">
        <span class="event__offer-title">${typeOffer.title}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${typeOffer.price}</span>
      </label>
    </div>`
  );
};

const createEventOffers = (typeOffers, offers, id) => {
  const offersMarkup = typeOffers.map((offer) => `${createEventOffer(offer, offers, id)}`).join(`\n`);
  return offersMarkup;
};

const createEventEditTemplate = (event) => {
  const {price, startTime, endTime, destination, id, isFavorite, offers, type} = event;
  const offersTemplate = createEventOffers(serverOffers, offers, id);
  const eventHeader = createEventHeader(price, startTime, endTime, type, destination, isFavorite, id);

  return (
    `<li class="trip-events__item">
      <form class="event  event--edit" action="#" method="post">
        ${eventHeader}
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>

            <div class="event__available-offers">
              ${offersTemplate}
            </div>
          </section>
        </section>
      </form>
    </li>`
  );
};

export default class TripEventEditTemplate extends AbstractComponent {
  constructor(event) {
    super();

    this._event = event;
  }

  getTemplate() {
    return createEventEditTemplate(this._event);
  }
}
