import {RenderPosition, render, remove} from "../utils/render.js";
import {returnUniqueValues} from "../utils/sup-functions.js";

import TripSortTemplate from "../components/trip-sort-template.js";
import TripListTemplate from "../components/trip-list-template.js";
import NoPointsTemplate from "../components/no-points.js";
import TripDayTemplate from "../components/trip-day-template.js";
import NewEventFormTemplate from "../components/new-event-form.js";

import EventController from "./event-controller.js";

import moment from "moment";

const renderEvents = (events) => {
  return events.map((event) => {
    let daysList = document.querySelectorAll(`.trip-events__list`);
    daysList = Array.prototype.slice.call(daysList);

    let dayDataList = daysList.map(function (item) {
      return item.classList[1];
    });

    const eventDay = moment(event.startTime).format(`y-MM-D`);
    const eventIndex = dayDataList.indexOf(eventDay);

    const eventController = new EventController(daysList[eventIndex]);
    eventController.render(event);

    return eventController;
  });
};

export default class EventsListController {
  constructor(container) {
    this._container = container;
    this._newEventFormComponent = null;
    this._noPointsComponent = null;
    this._tripListComponent = null;
    this._eventsControllers = [];

    this._newEventButton = document.querySelector(`.trip-main__event-add-btn`);
  }

  addHandlers() {
    const onNewEventButtonClick = () => {
      if (this._newEventFormComponent === null) {
        this._newEventFormComponent = new NewEventFormTemplate();
        render(this._container, this._newEventFormComponent, RenderPosition.AFTERBEGIN);
        this._newEventButton.setAttribute(`disabled`, `disabled`);

        if (this._noPointsComponent !== null) {
          remove(this._noPointsComponent);
        }
      }
    };

    this._newEventButton.addEventListener(`click`, onNewEventButtonClick);
  }

  renderDays(container, events) {
    let dataList = events.map(function (item) {
      return item.startTime;
    });
    dataList.sort((a, b) => a - b);
    dataList = dataList.map(function (item) {
      return moment(item).format();
    });
    dataList = returnUniqueValues(dataList);

    return dataList.map((item, i) => {
      const newDayComponent = new TripDayTemplate(item, i);
      render(container, newDayComponent, RenderPosition.BEFOREEND);
      return newDayComponent;
    });
  }

  renderEvents(events) {
    if (events.length === 0) {
      this._noPointsComponent = new NoPointsTemplate();
      render(this._container, this._noPointsComponent, RenderPosition.BEFOREEND);
      return;
    }

    this._tripListComponent = new TripListTemplate();
    render(this._container, new TripSortTemplate(), RenderPosition.AFTERBEGIN);
    render(this._container, this._tripListComponent, RenderPosition.BEFOREEND);

    const meow = this.renderDays(this._tripListComponent.getListComponent(), events);
    console.log(meow);
    events.sort((a, b) => a.endTime - b.endTime);
    const newEventControllers = renderEvents(events);
    this._eventsControllers = this._eventsControllers.concat(newEventControllers);
  }
}
