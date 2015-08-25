var Recipes = require('./handlers/recipes');
var Users = require('./handlers/users');

module.exports = [{
    method: 'GET',
    path: '/api/recipes',
    config: { auth: false },
    handler: Recipes.find
}, {
    method: 'GET',
    path: '/api/recipes/{id}',
    config: { auth: 'jwt' },
    handler: Recipes.findOne
}, {
    method: 'GET',
    path: '/api/users',
    config: { auth: false },
    handler: Users.find
}, {
    method: 'POST',
    path: '/api/users',
    config: { auth: false },
    handler: Users.create
}, {
    method: 'GET',
    path: '/{param*}',
    config: { auth: false },
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
}];
