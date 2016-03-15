module.exports = function canAssignAdmin(req, res, ok) {
  if (req.session.user.admin) {
    return ok();
  } else if (req.param('admin')) {
      var requireAdminError = [{
        name: 'requireAdmin',
        message: 'You must be an admin to assigning admins.'
      }];
      req.session.flash = {
        err: requireAdminError
      };

      res.redirect('/user/edit/' + req.session.user.id);
      return;
  } else {
    ok();
  }
};
