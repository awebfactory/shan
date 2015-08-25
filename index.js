var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');
var Sqlite3 = require('sqlite3');
var Jwt = require('hapi-auth-jwt2');
var uuid = require('node-uuid');

var db = new Sqlite3.Database('data/recipes.sqlite');

// Debug
var jsonwebtoken = require('hapi-auth-jwt2/node_modules/jsonwebtoken');

var server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }
});

server.connection({
    port: 3000
});

server.bind({
    db: db,
    uuid: uuid
});

// user has successfully logged in and is authenticated
var validate = function (decoded, request, callback) {
    // do your checks to see if the person is valid
    if (!people[decoded.id]) {
        return callback(null, false);
    } else {
        return callback(null, true);
    }
};

server.register(Jwt, function (err) {

    if (err) {
        console.log(err);
    }

    server.auth.strategy('jwt', 'jwt', true, {
        key: 'NeverShareYourSecret', // Never Share your secret key
        validateFunc: validate, // validate function defined above
        verifyOptions: {
            algorithms: ['HS256']
        } // pick a strong algorithm
    });
});

server.register(Inert, function () {});

server.route(require('./routes'));

server.start(function () {

    console.log('Server listening at:', server.info.uri);
});
