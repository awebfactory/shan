angular.module('shared.users.service', [

])
    .factory('UserService', ['$http', function ($http) {
        var currentUser = {};
        return {
            addUser: function (user) {
                $http.post('/api/users', user)
                    .then(grabUsers);
            },
            getCurrentUser: function () {
                return currentUser;
            },
            setCurrentUser: function (user) {
                currentUser = user;
                console.log('currentUser signed in user is: ', currentUser)
            },
        };
    }]);
