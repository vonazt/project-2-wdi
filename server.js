const express = require('express');
const mongoose = require('mongoose');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('express-flash');

const routes = require('./config/routes');
const User = require('./models/user');
const { port, dbURI } = require('./config/environment');

mongoose.connect(dbURI);

const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(ejsLayouts);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'very secure',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use((req, res, next) => {
  if (!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .populate({ path: 'plants', populate: { path: 'creator' }})
    .exec()
    .then(user => {
      if (!user) req.session.regenerate(() => res.redirect('/login'));

      res.locals.isLoggedIn = true;
      res.locals.user = user;
      req.user = user;

      next();
    });
});

app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(express.static(`${__dirname}/public`));

app.use(routes);

app.listen(port, () => console.log(`Express started on port: ${port}`));
