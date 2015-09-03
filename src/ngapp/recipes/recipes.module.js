angular.module('recipes', [
    'shared.recipes.service'
])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('recipejs.view-recipe', {
        	url:  '/recipes/:slug',
        	views: {
        		'recipes@': {
        	        templateUrl: "recipes/recipes.view-recipe.tmpl.html"
        	        //controller: "RecipesCtrl"
        		}
        	}
        });
})
.controller('RecipesCtrl', ['RecipeService', function (RecipeService) {
    var recipesCtrl = this;
    recipesCtrl.list = function() {
        return RecipeService.listRecipes();
    };
}])
.directive('recipe', [function() {
    return {
        templateUrl: 'recipes/recipe.tmpl.html'
    };
}]);
