import {RenderPosition, render} from "./utils/render.js";
import TripInfoTemplate from "./components/trip-info-template.js";
import TripTabsTemplate from "./components/trip-tabs-template.js";
import TripFiltersTemplate from "./components/trip-filters-template.js";

import {generateEvents} from "./mock/event-mock.js";
import EventsListController from "./controllers/events-list-controller.js";

const eventsList = generateEvents(7);
console.log(eventsList);

const contentSection = document.querySelector(`.trip-events`);
const headerRoutSection = document.querySelector(`.trip-main`);
const headerControlsSection = document.querySelector(`.trip-controls`);

render(headerRoutSection, new TripInfoTemplate(), RenderPosition.AFTERBEGIN);
render(headerControlsSection, new TripTabsTemplate(), RenderPosition.AFTERBEGIN);
render(headerControlsSection, new TripFiltersTemplate(), RenderPosition.BEFOREEND);

const enetsListController = new EventsListController(contentSection);
enetsListController.renderEvents(eventsList);
enetsListController.addHandlers();
