const serve = require('koa-static');

module.exports = class Static {
  static set({ app, dir, conf}) {
    app.use(serve(dir, conf));
    return true;
  }
}
