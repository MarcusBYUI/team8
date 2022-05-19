var s = (t, e, o) =>
  new Promise((n, r) => {
    var c = (a) => {
        try {
          l(o.next(a));
        } catch (i) {
          r(i);
        }
      },
      u = (a) => {
        try {
          l(o.throw(a));
        } catch (i) {
          r(i);
        }
      },
      l = (a) => (a.done ? n(a.value) : Promise.resolve(a.value).then(c, u));
    l((o = o.apply(t, e)).next());
  });
function d(t) {
  if (t.ok) return t.text();
  throw new Error("Bad Response");
}
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
  qs(t).addEventListener("touchend", (o) => {
    o.preventDefault(), e();
  }),
    qs(t).addEventListener("click", e);
}
export function getParams(t) {
  const e = window.location.search,
    o = new URLSearchParams(e),
    n = o.get(t);
  return n;
}
export function renderListWithTemplate(t, e, o, n) {
  (e.innerHTML = ""),
    o.forEach((r) => {
      const c = t.content.cloneNode(!0);
      e.appendChild(n(c, r));
    });
}
export function renderWithTemplate(t, e, o, n) {
  let r = t.content.cloneNode(!0);
  n && (r = n(r, o)), e.appendChild(r);
}
export function loadTemplate(t) {
  return s(this, null, function* () {
    const e = yield fetch(t).then(d),
      o = document.createElement("template");
    return (o.innerHTML = e), o;
  });
}
export function loadCartCounter() {
  let t = 0;
  const e = getLocalStorage("so-cart");
  Array.isArray(e) && e.length > 0
    ? e.forEach((o) => {
        t += o.count;
      })
    : (t = 0),
    (document.querySelector(".cart-count").innerHTML = t);
}
export function loadHeaderFooter() {
  return s(this, null, function* () {
    const t = yield loadTemplate("../partials/header.html"),
      e = yield loadTemplate("../partials/footer.html"),
      o = document.getElementById("main-header"),
      n = document.getElementById("main-footer");
    renderWithTemplate(t, o), renderWithTemplate(e, n), loadCartCounter();
  });
}
export function getTotal() {
  const t = getLocalStorage("so-cart");
  let e = 0,
    o = 0;
  return (
    t.forEach((n) => {
      (e += n.FinalPrice * n.count), (o += n.count);
    }),
    [e, o]
  );
}
export function totalToPage() {
  if (getLocalStorage("so-cart") == 0 || getLocalStorage("so-cart") == null)
    document.querySelector(".cart-footer").classList.add("hide");
  else {
    document.querySelector(".cart-footer").classList.remove("hide");
    const t = getTotal()[0];
    document.querySelector(".cart-total").innerHTML = `Total: $${parseFloat(
      t
    ).toFixed(2)}`;
  }
}
