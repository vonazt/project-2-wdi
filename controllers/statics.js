function indexRoute(req, res) {
  res.render('index');
}

module.exports = {
  index: indexRoute
};
