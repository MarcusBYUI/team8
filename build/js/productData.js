var a = (o, e, t) =>
  new Promise((u, c) => {
    var d = (n) => {
        try {
          r(t.next(n));
        } catch (s) {
          c(s);
        }
      },
      h = (n) => {
        try {
          r(t.throw(n));
        } catch (s) {
          c(s);
        }
      },
      r = (n) => (n.done ? u(n.value) : Promise.resolve(n.value).then(d, h));
    r((t = t.apply(o, e)).next());
  });
const f = "http://157.201.228.93:2992/";
function i(o) {
  if (o.ok) return o.json();
  throw new Error("Bad Response");
}
class p {
  constructor() {}
  getData(e) {
    return a(this, null, function* () {
      return fetch(f + e)
        .then(i)
        .then((t) => t.Result);
    });
  }
  findProductByID(e) {
    return a(this, null, function* () {
      const t = yield this.getData(`product/${e}`);
      return t;
    });
  }
}
export default p;
