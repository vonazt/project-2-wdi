const express = require('express');
const mongoose = require('mongoose');
const ejsLayouts = require('express-ejs-layouts');

const routes = require('./config/routes');

const app = express();

const { port, dbURI } = require('./config/environment');

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(ejsLayouts);

app.use(express.static(`${__dirname}/public`));

app.use(routes);

app.listen(port, () => console.log(`Express started on port: ${port}`));
