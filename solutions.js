module.exports = {
  f1: function (a, b) {
    let i = 0;
    let result = [];
    a.forEach(element => {
      result[i] = 0;
      b.forEach(x => {
        if (x === element) {
          result[i]++;
        }
      });
      i++;
    });
    return result;
  },
  f2: function (a) {
    let result = [];
    var re = /(\+?\-?\d+(\.\d+)?)/mg;
    a.replace(re, function (match, g1) { result.push(parseFloat(g1));});
    return result
  },
  f3: function (a) {
    return JSON.parse(JSON.stringify(a))
  },
  f4: function (cb) {
    if (typeof this.f4.fired == 'undefined') {
      console.log("we will call later");
      clearTimeout(this.f4.fire);
    }
    if (this.f4.fired == 1) {
      this.f4.fired = 'undefined'
    }
    return (
      this.f4.fire = setTimeout(() => {
        cb();
        this.f4.fired = 1;
      }, 300));
  }
}
