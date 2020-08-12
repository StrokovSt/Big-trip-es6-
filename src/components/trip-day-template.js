import AbstractComponent from "./abstract-component.js";

const createTripDayTemplate = () => {
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">2</span>
        <time class="day__date" datetime="2019-03-19">MAR 19</time>
      </div>
      <ul class="trip-events__list">
      </ul>
    </li>`
  );
};

export default class TripDayTemplate extends AbstractComponent {
  getTemplate() {
    return createTripDayTemplate();
  }
}
