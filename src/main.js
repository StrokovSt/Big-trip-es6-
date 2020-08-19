import {render, RenderPosition} from "./utils/render.js";
import {returnUniqueValues} from "./utils/sup-functions.js";

import TripInfoTemplate from "./components/trip-info-template.js";
import TripTabsTemplate from "./components/trip-tabs-template.js";
import TripFiltersTemplate from "./components/trip-filters-template.js";

import TripSortTemplate from "./components/trip-sort-template.js";
import TripListTemplate from "./components/trip-list-template.js";
import TripDayTemplate from "./components/trip-day-template.js";
import TripEventTemplate from "./components/trip-event-template.js";

import {generateEvents} from "./mock/event-mock.js";
import moment from "moment";

const eventsList = generateEvents(5);

const contentSection = document.querySelector(`.trip-events`);
const headerRoutSection = document.querySelector(`.trip-main`);
const headerControlsSection = document.querySelector(`.trip-controls`);

render(headerRoutSection, new TripInfoTemplate().getElement(), RenderPosition.AFTERBEGIN);
render(headerControlsSection, new TripTabsTemplate().getElement(), RenderPosition.AFTERBEGIN);
render(headerControlsSection, new TripFiltersTemplate().getElement(), RenderPosition.BEFOREEND);

render(contentSection, new TripSortTemplate().getElement(), RenderPosition.AFTERBEGIN);
render(contentSection, new TripListTemplate().getElement(), RenderPosition.BEFOREEND);

const tripDays = document.querySelector(`.trip-days`);

const renderDays = (events) => {
  let dataList = events.map(function (item) {
    return item.startTime;
  });
  dataList.sort((a, b) => a - b);
  dataList = dataList.map(function (item) {
    return moment(item).format();
  });
  dataList = returnUniqueValues(dataList);

  dataList.forEach((item) => {
    render(tripDays, new TripDayTemplate(item).getElement(), RenderPosition.BEFOREEND);
  });
};

renderDays(eventsList);

const renderEvents = (events) => {
  let daysList = document.querySelectorAll(`.trip-events__list`);
  daysList = Array.prototype.slice.call(daysList);

  let dayDataList = daysList.map(function (item) {
    return item.classList[1];
  });

  events.sort((a, b) => a.endTime - b.endTime);

  events.forEach((item) => {
    const eventDay = moment(item.startTime).format(`y-MM-D`);
    const eventIndex = dayDataList.indexOf(eventDay);
    render(daysList[eventIndex], new TripEventTemplate(item).getElement(), RenderPosition.BEFOREEND);
  });
};

renderEvents(eventsList);

// import NewEventFormTemplate from "./components/new-event-form.js";
// render(contentSection, new NewEventFormTemplate().getElement(), RenderPosition.AFTERBEGIN);
