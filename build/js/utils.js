export function qs(t, e = document) {
  return e.querySelector(t);
}
export function getLocalStorage(t) {
  return JSON.parse(localStorage.getItem(t));
}
export function setLocalStorage(t, e) {
  localStorage.setItem(t, JSON.stringify(e));
}
export function setClick(t, e) {
  qs(t).addEventListener("touchend", (n) => {
    n.preventDefault(), e();
  }),
    qs(t).addEventListener("click", e);
}
export function getParams(t) {
  const e = window.location.search,
    n = new URLSearchParams(e),
    o = n.get(t);
  return o;
}
export function renderListWithTemplate(t, e, n, o) {
  n.forEach((r) => {
    const c = t.content.cloneNode(!0);
    e.appendChild(o(c, r));
  });
}
