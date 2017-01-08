## Introduction
`init-koa2` is a WIP effort to automate the process of developing a new project with Koa2.

Usually when starting a new Koa app, you'll go through the regular routine
of:
1. adding plenty packages like `koa-bodyparser`, `koa-router`,
`koa-bunyan-logger`, ...etc
2. Setting up constants.
3. Wiring babel.
4. ... and much more tedious steps in order to actually start working.

### This is a needed node module
Koa is bare-bones (compared to express for instance), it's extremely fast,
but with the cost of loosing a lot of default packages that are almost
needed in every project.

This is a good thing, it allows you to use the packages you need, for the
functionality you need, but this process takes time, and requires a effort
and great attention to have your Koa app initialized properly.

### Convention over configuration
What this package does, is basically this:

```js
// index.js
require('init-koa2')({
  port: 3000,
  useStaticFiles: {
    dir: 'public',
    maxage: 0,
    hidden: false,
    index: 'index.json'
  },
  useBodyParser: {
    enableTypes: [ 'json' ],
    encode: 'utf8',
    jsonLimit: '1mb',
    strict: 'true'
  },
  useKoaRouter: true
});

router.get('home', '/', (ctx, next) => {
  ctx.body = 'Hello World!';
});
```

So it'll basically allow you to include packages only when you configure
them, while having default configs of course.

In the above example, if you don't configure `koa-router`, then it's not
included in your app, if you do, then it's included. That's it.

No need to define and require Koa itself, or the other basic packages
like router, bodyparse, ... etc

This module is starting with the minimum basic packages to get up
and running with a Koa2 app to build REST APIs, GraphQL server, or a
regular Web App running React.

So you can expect support for packages like router, bodyparser, graphql, graphi, ..etc all optional, all configurable, no need for installing and
requiring each one individually, just start with your new project with
`require('init-koa2')({Object}: options)`.

### Helper packages:
I'm planning to include helper packages to support more init tasks for new
node projects, like setting up babel, which can work in orchestration with
this package for `koa2`. Just trying to get things modular, and decoupled.

### Not yet complete:
This project isn't completed yet, contributions are welcomed.

### Ultimate goal:
This project's ultimate goal is to have the development with Koa
so easy to start with, whenever you start writing a Koa app, you
should just start writing it, not waste a lot of time configuring,
and setting up in order to begin actually developing.

Everything should be ready, and manageable from the first minute.

### @TODO
- Complete wiring up the remaining core packages.
- Add support for adding & configuring ESlint.
- Adding support for using & configuring Babel.
- Adding support for using & configuring React.
- Adding support for using & configuring GraphQL.
