import AbstractComponent from "./abstract-component.js";
import moment from "moment";

const createTripDayTemplate = (dateTime, i) => {
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${i + 1}</span>
        <time class="day__date" datetime="${moment(dateTime).format(`y-MM-D`)}">${moment(dateTime).format(`MMM D`)}</time>
      </div>
      <ul class="trip-events__list ${moment(dateTime).format(`y-MM-D`)}">
      </ul>
    </li>`
  );
};

export default class TripDayTemplate extends AbstractComponent {
  constructor(dateTime, index) {
    super();

    this._dateTime = dateTime;
    this._index = index;
  }

  getTemplate() {
    return createTripDayTemplate(this._dateTime, this._index);
  }

  getTripListComponent() {
    return this.getElement().querySelector(`.trip-events__list`);
  }
}
