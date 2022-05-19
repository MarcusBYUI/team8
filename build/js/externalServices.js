var c = (o, e, t) =>
  new Promise((r, s) => {
    var a = (n) => {
        try {
          i(t.next(n));
        } catch (u) {
          s(u);
        }
      },
      p = (n) => {
        try {
          i(t.throw(n));
        } catch (u) {
          s(u);
        }
      },
      i = (n) => (n.done ? r(n.value) : Promise.resolve(n.value).then(a, p));
    i((t = t.apply(o, e)).next());
  });
const d = "http://157.201.228.93:2992/";
function h(o) {
  if (o.ok) return o.json();
  throw { name: "servicesError", message: o.json() };
}
class f {
  constructor() {}
  getData(e) {
    return c(this, null, function* () {
      return fetch(d + e)
        .then(h)
        .then((t) => t.Result);
    });
  }
  findProductByID(e) {
    return c(this, null, function* () {
      const t = yield this.getData(`product/${e}`);
      return t;
    });
  }
  checkout(e) {
    return c(this, null, function* () {
      const t = "http://157.201.228.93:2992/checkout",
        r = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        },
        s = yield fetch(t, r),
        a = yield h(s);
      return a;
    });
  }
}
export default f;
