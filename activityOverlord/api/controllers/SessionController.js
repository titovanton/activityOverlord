/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'new': function(req, res) {
    // var oldDateObj = new Date();
    // var newDateObj = new date(oldDateObj.getTime() + 60 * 1000);
    // req.session.cookie.expires = newDateObj;
    // req.session.authenticated = true;

    res.view();
  },

  'create': function(req, res) {
    if (!req.param['email'] || req.param['password']) {
      ;
    }
  }
};
