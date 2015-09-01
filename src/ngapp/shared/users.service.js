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
            }
        return {
            addUser: function (user) {
                $http.post('/api/users', user)
                    .then(grabUsers);
            },
            login: function (user) {
                return $http.post('/login', user)
                    .then(function success(res) {
                        setCurrentUser(res);
                        return res;
                    });
            },
            logout: function () {
                var nullres = {'data': {}};
                nullres.data.user = {};
                nullres.data.token = '';
                setCurrentUser(nullres);
            },
            getCurrentUser: function () {
                return currentUser;
            },
        }
    }]);
