angular.module('shared.users.service', [

])
    .factory('UserService', ['$http', '$window', function ($http, $window) {
        var currentUser = {};
        var setCurrentUser = function (res) {
                currentUser = res.data.user;
                var store = $window.localStorage;
                var key = 'auth-token';
                store.setItem(key, res.data.token);
                console.log('currentUser signed in user is: ', currentUser)
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
            getCurrentUser: function () {
                return currentUser;
            },
        }
    }]);
