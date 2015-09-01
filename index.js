var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');
var Sqlite3 = require('sqlite3');
var Jwt = require('hapi-auth-jwt2');
var uuid = require('node-uuid');

var db = new Sqlite3.Database('data/recipes.sqlite');

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

var secret = "NeverShareYourSecret";

server.bind({
    db: db,
    uuid: uuid,
    secret: secret
});

// user has successfully logged in and is authenticated
var validate = function (decoded, request, callback) {
    // console.log(decoded.uuid);
    db.get('SELECT * FROM users WHERE uuid = ?', [decoded.uuid], function (err, result) {
        if (err) {
            throw err;
        }
        if (typeof result === 'undefined') {
            return callback(null, false);
        } else {
            return callback(null, true);
        }
    });
};

server.register([Inert, Jwt], function (err) {

    if (err) {
        console.log(err);
    }

    server.auth.strategy('jwt', 'jwt', true, {
        key: secret, // Never Share your secret key
        validateFunc: validate, // validate function defined above
        verifyOptions: {
            algorithms: ['HS256']
        } // pick a strong algorithm
    });

    server.route(require('./routes'));

    server.start(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Server listening at:', server.info.uri);
        }
    });
});
