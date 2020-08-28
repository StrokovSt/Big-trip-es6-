import AbstractComponent from "./abstract-component.js";
import {getTimeFromMins} from "../utils/sup-functions.js";
import moment from "moment";

const createEventOffer = (offer) => {
  return (
    `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
    </li>`
  );
};

const createEventOffers = (offers) => {
  const offersMarkup = offers.map((it) => `${createEventOffer(it)}`).join(`\n`);
  return offersMarkup;
};

const createEventTemplate = (event) => {
  const {price, startTime, endTime, destination, id, isFavorite, offers, type} = event;
  const offersTemplate = createEventOffers(offers);
  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} to ${destination.name}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${moment(startTime)}">${moment(startTime).format(`HH:mm`)}</time>
            &mdash;
            <time class="event__end-time" datetime="${moment(endTime)}">${moment(endTime).format(`HH:mm`)}</time>
          </p>
          <p class="event__duration">${getTimeFromMins(moment(endTime).diff(moment(startTime), `m`))}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offersTemplate}
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export default class TripEventTemplate extends AbstractComponent {
  constructor(event) {
    super();

    this._event = event;
  }

  getTemplate() {
    return createEventTemplate(this._event);
  }

  setEditButtonEventListener(handler) {
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, handler);
  }
}
