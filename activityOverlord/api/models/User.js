/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    title: {
      type: 'string'
    },

    email: {
      type: 'string',
      required: true,
      email: true,
      unique: true
    },

    admin: {
      type: 'boolean',
      defaultsTo: false
    },

    encryptedPassword: {
      type: 'string'
    },
  },

  beforeValidate: function beforeValidate(values, next) {
    values.admin = !!values.admin;
    next();
  },

  beforeCreate: function beforeCreate(values, next) {
    if (!values.password || values.password != values.confirmation) {
      return next({err: ['Password does not match password confirmation.']});
    }

    require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
      if (err) return next(err);

      values.encryptedPassword = encryptedPassword;
      next();
    });
  }
};
