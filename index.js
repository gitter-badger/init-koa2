const shell = require('shelljs');
const Koa = require('koa');
const chalk = require('chalk');

class In1tKoa2 {
  // defaults:
  constructor({
    port = 3000,
    logging = 1,
    useStaticFiles = 1,
    useEslint = 0,
    useBunyanLogger = 1,
    useBodyParser = 1,
    useKoaRouter = 1,
    useGraphServerKoa = 0,
    useReact = 0
  }) {
    this.port = port;
    this.logging = logging;
    this.useStaticFiles = useStaticFiles;
    this.useEslint = useEslint;
    this.useBunyanLogger = useBunyanLogger;
    this.useBodyParser = useBodyParser;
    this.useKoaRouter = useKoaRouter;
    this.useGraphServerKoa = useGraphServerKoa;
    this.useReact = useReact;
    if (this.logging) {
      const badge = chalk.green('\n=== [[[ In1t ]]] ===\n');
      console.log(badge);
    }
  }

  success({ message }) {
    if (this.logging) {
      process.stdout.write(chalk.blue(`-> ${message}\n`));
    }
  }

  error({ message }) {
    if (this.logging) {
      process.stdout.write(chalk.red(`-> ${message}\n`));
    }
  }

  koa() {
    this.success({ message: 'Started Koa2, you can access "app" like you normally do' });
    global.app = new Koa();
  }

  staticFiles() {
    if (this.useStaticFiles) {
      this.success({ message: 'Added support for static files' });
      const serve = require('koa-static');
      app.use(serve(this.useStaticFiles.dir, this.useStaticFiles));
    }
  }

  bunYanLogger() {
    if (this.useBunyanLogger) {
      this.success({ message: 'Using BunYan Logger' });
      const koaBunyanLogger = require('koa-bunyan-logger');
      app.use(koaBunyanLogger({ name: 'In1t' }));
      app.use(koaBunyanLogger.requestLogger());
    }
  }

  bodyParser() {
    if (this.useBodyParser) {
      this.success({ message: 'Using BodyParser' });
      const bodyParser = require('koa-bodyparser');
      app.use(bodyParser(this.useBodyParser));
    }
  }

  router() {
    if (this.useKoaRouter) {
      this.success({ message: 'Using Koa2 Router' });
      const router = require('koa-router')();
      global.router = router;
      app.use(router.routes());
      app.use(router.allowedMethods());
    }
  }

  boot() {
    this.koa();
    this.staticFiles();
    this.router();
    app.listen(this.port);
  }

}

module.exports = (options) => {
  const In1t = new In1tKoa2(options);
  In1t.boot();
  return In1t;
};
