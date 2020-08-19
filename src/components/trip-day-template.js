import AbstractComponent from "./abstract-component.js";
import moment from "moment";

const createTripDayTemplate = (dateTime) => {
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">2</span>
        <time class="day__date" datetime="${moment(dateTime).format(`y-MM-D`)}">${moment(dateTime).format(`MMM D`)}</time>
      </div>
      <ul class="trip-events__list ${moment(dateTime).format(`y-MM-D`)}">
      </ul>
    </li>`
  );
};

export default class TripDayTemplate extends AbstractComponent {
  constructor(dateTime) {
    super();
    this._dateTime = dateTime;
  }

  getTemplate() {
    return createTripDayTemplate(this._dateTime);
  }
}
