var d = (e, t, n) =>
  new Promise((o, r) => {
    var c = (a) => {
        try {
          i(n.next(a));
        } catch (l) {
          r(l);
        }
      },
      s = (a) => {
        try {
          i(n.throw(a));
        } catch (l) {
          r(l);
        }
      },
      i = (a) => (a.done ? o(a.value) : Promise.resolve(a.value).then(c, s));
    i((n = n.apply(e, t)).next());
  });
function u(e) {
  if (e.ok) return e.text();
  throw new Error("Bad Response");
}
export function qs(e, t = document) {
  return t.querySelector(e);
}
export function getLocalStorage(e) {
  return JSON.parse(localStorage.getItem(e));
}
export function setLocalStorage(e, t) {
  localStorage.setItem(e, JSON.stringify(t));
}
export function setClick(e, t) {
  qs(e).addEventListener("touchend", (n) => {
    n.preventDefault(), t();
  }),
    qs(e).addEventListener("click", t);
}
export function getParams(e) {
  const t = window.location.search,
    n = new URLSearchParams(t),
    o = n.get(e);
  return o;
}
export function renderListWithTemplate(e, t, n, o) {
  n.forEach((r) => {
    const c = e.content.cloneNode(!0);
    t.appendChild(o(c, r));
  });
}
export function renderWithTemplate(e, t, n, o) {
  let r = e.content.cloneNode(!0);
  o && (r = o(r, n)), t.appendChild(r);
}
export function loadTemplate(e) {
  return d(this, null, function* () {
    const t = yield fetch(e).then(u),
      n = document.createElement("template");
    return (n.innerHTML = t), n;
  });
}
export function loadHeaderFooter() {
  return d(this, null, function* () {
    const e = yield loadTemplate("../partials/header.html"),
      t = yield loadTemplate("../partials/footer.html"),
      n = document.getElementById("main-header"),
      o = document.getElementById("main-footer");
    renderWithTemplate(e, n), renderWithTemplate(t, o);
  });
}
