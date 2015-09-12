angular.module('recipes', [
    'shared.recipes.service'
])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('recipejs.view-recipe', {
        	url:  'recipes/:slug',
        	views: {
        		'recipes@': {
        	        templateUrl: "recipes/recipes.view-recipe.tmpl.html",
        	 //       controller: function($scope, $stateParams) {
        	 //       	console.log('stateParams: ', $stateParams);
        	        controller: 'RecipesCtrl as recipesCtrl'
        		}
        	}
        });
})
.controller('RecipesCtrl', ['RecipeService', '$stateParams', function (RecipeService, $stateParams) {
    var recipesCtrl = this;
    recipesCtrl.list = function() {
        return RecipeService.listRecipes();
    };
    recipesCtrl.recipeBySlug = function() {
    	return RecipeService.getCurrentRecipe($stateParams.slug);
    };
    recipesCtrl.getRecipeName = function() {
    	return RecipeService.getCurrentRecipeName();
    };
}])
.directive('recipe', [function() {
    return {
        templateUrl: 'recipes/recipe.tmpl.html'
    };
}]);
