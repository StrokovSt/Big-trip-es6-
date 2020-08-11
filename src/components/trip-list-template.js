import AbstractComponent from "./abstract-component.js";

const createTripListTemplate = () => {
  return (
    `<ul class="trip-events__list">
    </ul>`
  );
};

export default class TripListTemplate extends AbstractComponent {
  getTemplate() {
    return createTripListTemplate();
  }
}
