var Recipes = require('./handlers/recipes');
var Users = require('./handlers/users');

module.exports = [{
    method: 'GET',
    path: '/api/recipes',
    handler: Recipes.find
}, {
    method: 'GET',
    path: '/api/recipes/{id}',
    handler: Recipes.findOne
}, {
    method: 'GET',
    path: '/api/users',
    handler: Users.find
}];
