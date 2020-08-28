const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

//  --------------------  Функция по созданию DOM элемента

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

//  --------------------  Функция добавления DOM элемента в разметку

const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

//  --------------------  Функция замены элементов

const replace = (newComponent, oldComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  const isElementsExist = !!(parentElement && newElement && oldElement);

  if (isElementsExist && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};

//  --------------------  Функция удаления элемента

const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

export {RenderPosition, createElement, render, replace, remove};
