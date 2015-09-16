angular.module('shared.recipes.service', [
    
])
    .service('RecipeService', ['$http', function ($http) {
        var recipes = [];
        var currentRecipe = {};
        this.getRecipes = function () {
            $http.get('/api/recipes').then(function (res) {
                console.log('Grabbed recipes from back-end upon load');
                recipes = res.data;
                console.log(recipes);
            }, function (errResponse) {
                console.error('recipes query error');
            });
        };
        this.listRecipes = function () {
            return recipes;
        };
        this.getCurrentRecipe = function(slug) {
                $http.get('/api/recipes/slug/' + slug).then(function (res) {
                    console.log('Grabbed recipe from back-end by slug');
                    console.log(res.data);
                    currentRecipe = res.data;
                }, function (errResponse) {
                    console.error('currentRecipe query error');
                });
            return currentRecipe;
        };
    	this.getCurrentRecipeName = function () {
    		//console.log('name', currentRecipe.name);
    	    return currentRecipe.name;	
    	};
        this.addRecipe = function (recipe) {
            recipes.push(recipe);
        };
    }]);
