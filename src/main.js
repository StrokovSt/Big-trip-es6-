import {render, RenderPosition} from "./utils/render.js";

import TripInfoTemplate from "./components/trip-info-template.js";
import TripTabsTemplate from "./components/trip-tabs-template.js";
import TripFiltersTemplate from "./components/trip-filters-template.js";

import TripSortTemplate from "./components/trip-sort-template.js";
import TripListTemplate from "./components/trip-list-template.js";
import TripEventTemplate from "./components/trip-event-template.js";

import NewEventFormTemplate from "./components/new-event-form.js";

const contentSection = document.querySelector(`.trip-events`);
const headerRoutSection = document.querySelector(`.trip-main`);
const headerControlsSection = document.querySelector(`.trip-controls`);

render(headerRoutSection, new TripInfoTemplate().getElement(), RenderPosition.AFTERBEGIN);
render(headerControlsSection, new TripTabsTemplate().getElement(), RenderPosition.AFTERBEGIN);
render(headerControlsSection, new TripFiltersTemplate().getElement(), RenderPosition.BEFOREEND);

render(contentSection, new TripSortTemplate().getElement(), RenderPosition.AFTERBEGIN);
render(contentSection, new TripListTemplate().getElement(), RenderPosition.BEFOREEND);

const eventsList = document.querySelector(`.trip-events__list`);

render(eventsList, new TripEventTemplate().getElement(), RenderPosition.BEFOREEND);
render(eventsList, new TripEventTemplate().getElement(), RenderPosition.BEFOREEND);


// render(contentSection, new NewEventFormTemplate().getElement(), RenderPosition.BEFOREEND);
