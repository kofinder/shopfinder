const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

const apiRoutes = require('./server/routes/apiRoutes.js');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }));

  server.use('/api', apiRoutes);

  // Server-side
  const route = pathMatch();

  server.get('/instock-product', (req, res) => {
    return app.render(req, res, '/instock', req.query);
  });

  server.get('/instock-product/:slug', (req, res) => {
    const params = route('/instock-product/:slug')(parse(req.url).pathname);
    return app.render(req, res, '/product-detail', params);
  });

  server.get('/customize-product', (req, res) => {
    return app.render(req, res, '/customize', req.query);
  });
  server.get('/account', (req, res) => {
    return app.render(req, res, '/account', req.query);
  });
  server.get('/account/login', (req, res) => {
    return app.render(req, res, '/login', req.query);
  });
  server.get('/account/signup', (req, res) => {
    return app.render(req, res, '/signup', req.query);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});
