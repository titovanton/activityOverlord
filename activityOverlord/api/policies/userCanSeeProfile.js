module.exports = function userCanSeeProfile(req, res, ok) {
  var profileOwner = req.session.user && req.session.user.id == req.param('id');
  var isAdmin = req.session.user && req.session.user.admin;

  if (!profileOwner && !isAdmin) {
      var noRightsError = [{
        name: 'noRights',
        message: 'You must be an admin.'
      }];
      req.session.flash = {
        err: noRightsError
      };

      res.redirect('/session/new');
      return;
  }

  ok();
};
