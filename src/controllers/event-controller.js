import {RenderPosition, render, replace} from "../utils/render.js";

import TripEventTemplate from "../components/trip-event-template.js";
import TripEventEditTemplate from "../components/trip-event-edit-template.js";

export default class EventController {
  constructor(container) {
    this._container = container;
    this._event = {};
    this._eventComponent = null;
    this._eventEditComponent = null;
  }

  render(event) {
    this._event = event;
    this._eventComponent = new TripEventTemplate(this._event);
    render(this._container, this._eventComponent, RenderPosition.BEFOREEND);

    this._eventComponent.setEditButtonEventListener((evt) => {
      evt.preventDefault();
      this._eventEditComponent = new TripEventEditTemplate(this._event);
      replace(this._eventEditComponent, this._eventComponent);
    });
  }
}
