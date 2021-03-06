angular.module('header', [
        'shared.recipes.service',
        'shared.users.service'
    ])
    .controller('HeaderCtrl', ['RecipeService', 'UserService', function (RecipeService, UserService) {
        var headerCtrl = this;
        headerCtrl.message = 'Welcome';
        headerCtrl.titletext = 'RecipeJS Shan';
        headerCtrl.edition = 'First';
        headerCtrl.list = function () {
            return RecipeService.listRecipes();
        };
        headerCtrl.currentUserName = function () {
            var cuser = UserService.getCurrentUser();
            return cuser.full_name;
        };
        headerCtrl.logout = function () {
            UserService.logout();
            //usersCtrl.user = {};
            //usersCtrl.tab = 'signin';
        };
        var init = function () {
            RecipeService.getRecipes();
        };
        init();
    }])
    .directive('recipePlain', [function() {
        return {
            templateUrl: 'header/recipe-plain.tmpl.html'
        };
    }]);