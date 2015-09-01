angular.module('users', [
        'shared.users.service'
    ])
    .controller('UsersCtrl', ['UserService', function (UserService) {
        var usersCtrl = this;
        usersCtrl.tab = 'signin';
        usersCtrl.open = function (tab) {
            usersCtrl.tab = tab;
        };
        usersCtrl.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        usersCtrl.user = {};
        usersCtrl.newuser = {};
        usersCtrl.signin = function () {
            // if email and password is matched, login ok
            if (auth) {
                console.log('User signed in successfully: ', usersCtrl.user);
                // TODO Set current user
                usersCtrl.tab = 'off';
            } else {
                usersCtrl.tab = 'signup';
                console.log('No registered user for ', usersCtrl.user);
            }
        };
        usersCtrl.signup = function () {
            if () {
                UserService.addUser(usersCtrl.newuser);
                console.log('User signed up: ', usersCtrl.newuser)
                    // reset form and model
                usersCtrl.newuser = {};
            } else {
                console.log('Registered user attempted to sign up', usersCtrl.newuser)
            }
        };
    }]);
