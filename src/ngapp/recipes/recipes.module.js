angular.module('recipes', [
    'recipes.view',
    'shared.recipes.service'
])

.controller('RecipesCtrl', ['RecipeService', '$stateParams', function (RecipeService, $stateParams) {
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
