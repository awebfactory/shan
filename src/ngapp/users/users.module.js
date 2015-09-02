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
        usersCtrl.currentUser = {};
        usersCtrl.signin = function () {
            UserService.login(usersCtrl.user).then(
                function success(res) {
                    // reset form and model
                    usersCtrl.user = {};
                    usersCtrl.tab = 'off';
                    usersCtrl.currentUser = res.data.user;
                    //console.log('User signed in successfully: ', usersCtrl.currentUser);
                },
                function error (res) {
                    usersCtrl.tab = 'signup';
                    //console.log('Error on signup for', usersCtrl.user);
                    //console.log(res);
                    alert('Error: ' + res.data);
                }
            );
        };
        usersCtrl.signup = function () {
            UserService.addUser(usersCtrl.newuser).then(
                function success(res) {
                    // reset form and model
                    usersCtrl.newuser = {};
                    usersCtrl.tab = 'signin';
                    //console.log('User signed up: ', usersCtrl.newuser)
                }
            );
        };
        usersCtrl.currentUserName = function () {
            usersCtrl.currentUser = UserService.getCurrentUser();
            //console.log('user: ', usersCtrl.currentUser);
            if (_.isEmpty(usersCtrl.currentUser)) {
                if (usersCtrl.tab == 'off') {
                    usersCtrl.tab = 'signin';
                }
                //console.log('no user logged in');
                return '';
            } else {
                //console.log('user is logged in');
                return usersCtrl.currentUser.email;
            }
        };
    }]);
