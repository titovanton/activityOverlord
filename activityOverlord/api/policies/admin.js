module.exports = function admin(req, res, ok) {
  if (req.session.user && req.session.user.admin) {
    return ok();
  } else {
      var requireAdminError = [{
        name: 'requireAdmin',
        message: 'You must be an admin.'
      }];
      req.session.flash = {
        err: requireAdminError
      };

      res.redirect('/session/new');
      return;
  }
};
