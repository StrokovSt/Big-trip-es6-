import AbstractComponent from "./abstract-component.js";

const createTripListTemplate = () => {
  return (
    `<ul class="trip-days">
    </ul>`
  );
};

export default class TripListTemplate extends AbstractComponent {
  getTemplate() {
    return createTripListTemplate();
  }

  getListComponent() {
    return this.getElement();
  }
}
