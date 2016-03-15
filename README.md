# activityOverlord Tutorial

Original tutorial is available
[on YouTube](https://www.youtube.com/watch?v=1H0UfbGdwd8&index=1&list=PLWsZeJCry-F4K4iRImeB3-i0S5mw9Ak-W)

You can easy up and run it with Vagrant. Some bugs and errors was solved,
for example:

- In userCanSeeProfile was refactored if statement
- Resolved the error with order policies for UserController
- Server-side admin assigning validation: canAssignAdmin

Also, you will see the nodemone package in bootstrap.sh. Follow the link bellow to
read more about it and use `nodemone -L` instead `sails lift` to do not reload
sails when a files changed.

### Mongo DB

There was the problem with installing sails-mongo,
[the corresponding issue was made](https://github.com/balderdashy/sails-mongo/issues/390)

In this case, I assign admin rights to a first user of users list, if list is
not empty and every time when some one create a session.

### Useful links

First of all, the author of the guide could follows at least the style guide link ):-[

- [JavaScript style guid](https://github.com/airbnb/javascript/tree/master/es5)
- [nodemon](http://nodemon.io/)
- [Sails](http://sailsjs.org/)
- [Vagrant](https://www.vagrantup.com/)
