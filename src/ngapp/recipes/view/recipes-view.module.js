angular.module('recipes.view', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('recipejs.view-recipe', {
            	url:  'recipes/:slug',
            	views: {
        		    'recipes@': {
        	            templateUrl: "recipes/view/recipes.view-recipe.tmpl.html",
        	            controller: 'RecipesViewCtrl as recipesViewCtrl'
        		    }
            	}
            });
    })
   .controller('RecipesViewCtrl', ['RecipeService', '$stateParams', function (RecipeService, $stateParams) {
        var recipesViewCtrl = this;
    	RecipeService.getCurrentRecipe($stateParams.slug);
        recipesViewCtrl.recipeBySlug = function() {
        	console.log('hola: ', $stateParams);
    	    return RecipeService.getCurrentRecipe($stateParams.slug);
        };
        recipesViewCtrl.getRecipeName = function() {
    	    return RecipeService.getCurrentRecipeName($stateParams.slug);
        };
    }]); 
