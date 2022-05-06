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

//Code from the exmaple 
export function renderWithTemplate(template, parent, data, callback) {
  console.log(template);
  let clone = template.content.cloneNode(true);
  if(callback) {
    clone = callback(clone, data);
  }
  parent.appendChild(clone);

}

export async function loadTemplate(path) {
  const html = await fetch(path).then(response => response.text());
  const template = document.createElement("template");
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter(){
  const header_1 = await loadTemplate("/partials/header.html")
  const footer_1 = await loadTemplate("/partials/footer.html")
  const elment_header = document.querySelector("#main-header")
  const elment_footer = document.querySelector("#main-footer")
  renderWithTemplate(header_1,elment_header,null)
  renderWithTemplate(footer_1,elment_footer,null)
}
   
