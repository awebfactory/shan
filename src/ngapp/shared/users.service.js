angular.module('shared.users.service', [

    ])
    .factory('UserService', ['$http', '$window', function ($http, $window) {
        var currentUser = {};
        var setCurrentUser = function (res) {
            var store = $window.localStorage;
            var key = 'auth-token';
            currentUser = res.data.user;

            if (res.data.token) {
                store.setItem(key, res.data.token);
                console.log('currentUser signed in user is: ', currentUser);
            } else {
                store.removeItem(key);
                console.log('currentUser signed out');
            }
        };
        //TODO make reusable filter http://www.java2s.com/Tutorials/AngularJS/AngularJS_Example/Filter/Filter_to_remove_space_and_lowercase_with_regular_expression.htm
        var removeSpacesThenLowercase = function (text) {
            console.log('before: ', text);
            var str = text.replace(/\s+/g, '');
            console.log('after: ', str);
            return str.toLowerCase();
        };
        return {
            addUser: function (user) {
                user.username = removeSpacesThenLowercase(user.full_name);
                console.log(user);
                return $http.post('/api/users', user)
                    .then(function success(res) {
                        return res;
                    });
            },
            login: function (user) {
                return $http.post('/login', user)
                    .then(function success(res) {
                        setCurrentUser(res);
                        return res;
                    });
            },
            logout: function () {
                var nullres = {
                    'data': {}
                };
                nullres.data.user = {};
                nullres.data.token = '';
                setCurrentUser(nullres);
            },
            getCurrentUser: function () {
                return currentUser;
            },
        };
    }]);
