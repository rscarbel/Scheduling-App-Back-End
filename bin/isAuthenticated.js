function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  }
};

module.exports = isAuthenticated