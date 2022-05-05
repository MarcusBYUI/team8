// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

export function renderListWithTemplate(
  template,
  parentElement,
  list,
  callback
) {
  list.forEach((product) => {
    const clone = template.content.cloneNode(true);
    parentElement.appendChild(callback(clone, product));
  });
}

export function renderWithTemplate(template, parentElement, data, callback) {
  let clone = template.content.cloneNode(true);

  if (callback) {
    clone = callback(clone, data);
  }

  parentElement.appendChild(clone);
}

export async function loadTemplate(path) {
  const html = await fetch(path).then((response) => response.text());
  const newTemplate = document.createElement("template");
  newTemplate.innerHTML = html;
  return newTemplate;
}

export async function loadHeaderFooter(headerPath, footerPath) {
  const loadHeader = await loadTemplate(headerPath);
  const loadFooter = await loadTemplate(footerPath);

  const domHeader = document.getElementById("main-header");
  const domFooter = document.getElementById("main-footer");

  renderWithTemplate(loadHeader, domHeader, null);
  renderWithTemplate(loadFooter, domFooter, null);
}
