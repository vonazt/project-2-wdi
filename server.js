const express = require('express');
const mongoose = require('mongoose');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const routes = require('./config/routes');

const app = express();

const { port, dbURI } = require('./config/environment');

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(ejsLayouts);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body_method;
    delete req.body_method;
    return method;
  }
}));

app.use(express.static(`${__dirname}/public`));

app.use(routes);

app.listen(port, () => console.log(`Express started on port: ${port}`));
