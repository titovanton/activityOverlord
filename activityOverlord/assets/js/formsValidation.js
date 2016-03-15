;jQuery(function($) {
  $('#user-new').validate({
    rules: {
      name: {
        required: true
      },

      email: {
        required: true,
        email: true
      },

      password: {
        required: true,
        minlength: 6
      },

      confirmation: {
        required: true,
        equalTo: '#password'
      }
    },

    messages: {
      name: {
        required: 'Please enter your real name'
      },

      email: {
        required: 'Please enter your email address',
        email: 'It does not look like an email address'
      },

      password: {
        required: 'Please provide a password',
        minlength: 'You password must be at least 6 characters long'
      },

      confirmation: {
        required: 'Please provide a password',
        equalTo: 'The confirmation must be equel to password field'
      }
    }
  });

  $('#user-edit').validate({
    rules: {
      name: {
        required: true
      },

      email: {
        required: true,
        email: true
      }
    },

    messages: {
      name: {
        required: 'Please enter your real name'
      },

      email: {
        required: 'Please enter your email address',
        email: 'It does not look like an email address'
      }
    }
  });
});
