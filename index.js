const shell = require('shelljs');
const Koa = require('koa');
const chalk = require('chalk');
const packageJson = require('read-pkg');
require('./modules/reporter');
const statik = require('./modules/static');

class In1tKoa2 {
  constructor({ port, logging, useStaticFiles, useEslint, useBunyanLogger, useBodyParser, useKoaRouter, useGraphServerKoa, useReact }) {
    this.port = port || 3000;
    this.logging = logging || true;
    this.useStaticFiles = useStaticFiles || { dir: 'public', maxage: 0, hidden: false, index: 'index.json' };
    this.useBodyParser = useBodyParser || {enableTypes: [ 'json' ],encode: 'utf8',jsonLimit: '1mb',strict: 'true'};
    this.useEslint = useEslint || true;
    this.useBunyanLogger = useBunyanLogger || true;
    this.useKoaRouter = useKoaRouter || true;
    this.useGraphServerKoa = useGraphServerKoa || false;
    this.useReact = useReact || true;

    try {
      this.package = packageJson.sync();
    } catch (err) {
      this.error({message: `
        ------------------------------------------------------------------------
        Couldn't find package.json in your project! Please make sure to have one
        in the root of your project.

        You can use '$ npm init .' command to create one interactively.
        ------------------------------------------------------------------------
        `});
      shell.exit(1);
    }
  }
  reportAppHaveStarted() {
    const badge = chalk.green(`
      === [[[ ${this.package.name} ]]] ===\n
    `);
    const url = chalk.blue(`
      app is running on port: ${this.port}
      -> localhost:${this.port}
    `);
    console.log(badge,url);
  }
  koa() { global.app = new Koa(); }
  staticFiles() {
    statik.set({
      app,
      dir: this.useStaticFiles.dir,
      conf: this.useStaticFiles
    });
  }

  bunYanLogger() {
    app.use(require('koa-bunyan-logger')({ name: this.package.name }));
    app.use(require('koa-bunyan-logger').requestLogger());
  }

  bodyParser() {
    return app.use(require('koa-bodyparser')(this.useBodyParser));
  }

  router() {
      const router = require('koa-router')();
      app.use(router.routes());
      app.use(router.allowedMethods());
      global.router = router;
      return router;
  }

  boot() {
    this.koa();
    this.staticFiles();
    this.router();
    this.bunYanLogger();
    app.listen(this.port, () => this.reportAppHaveStarted());
  }

}

module.exports = (options = {}) => {
  const In1t = new In1tKoa2(options);
  In1t.boot();
  return In1t;
};
