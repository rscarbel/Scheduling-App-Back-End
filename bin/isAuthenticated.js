function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    return res.send({error: 'You need to be logged in first.'})
  }
};

module.exports = isAuthenticated