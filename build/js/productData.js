var h = (r, t, n) =>
  new Promise((e, c) => {
    var i = (o) => {
        try {
          s(n.next(o));
        } catch (a) {
          c(a);
        }
      },
      u = (o) => {
        try {
          s(n.throw(o));
        } catch (a) {
          c(a);
        }
      },
      s = (o) => (o.done ? e(o.value) : Promise.resolve(o.value).then(i, u));
    s((n = n.apply(r, t)).next());
  });
function d(r) {
  if (r.ok) return r.json();
  throw new Error("Bad Response");
}
class f {
  constructor(t) {
    (this.category = t), (this.path = `../json/${this.category}.json`);
  }
  getData() {
    return fetch(this.path)
      .then(d)
      .then((t) => t);
  }
  findProductByID(t) {
    return h(this, null, function* () {
      const n = yield this.getData();
      return n.find((e) => e.Id === t);
    });
  }
}
export default f;
