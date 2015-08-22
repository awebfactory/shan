var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');
var Sqlite3 = require('sqlite3');
var Jwt = require('hapi-auth-jwt2');
var jsonwebtoken = require('hapi-auth-jwt2/node_modules/jsonwebtoken');

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

server.bind({
    db: db
});

server.register(Inert, function () {});

var people = { // our "users database"
    1: {
        id: 1,
        name: 'Jen Jones'
    },
    2: {
        id: 2,
        name: 'Victor Kane'
    }
};

// bring your own validation function
var validate = function (decoded, request, callback) {

    // DEBUG!
    // Just to try this out, you can invoke the creation of a valid signature that can be used in curl cli by uncommenting the following:
    console.log(jsonwebtoken.sign({id: 2, name: "Victor Kane"}, "NeverShareYourSecret"));
    // It gives:
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IlZpY3RvciBLYW5lIiwiaWF0IjoxNDQwMjY3Nzg1fQ.ZjYVnNvT-NFGpiaqnBVdtWebTZxFA6K__aaUh2BezLo
    // So you can do:
    // curl -H "Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IlZpY3RvciBLYW5lIiwiaWF0IjoxNDQwMjY3Nzg1fQ.ZjYVnNvT-NFGpiaqnBVdtWebTZxFA6K__aaUh2BezLo" http://0.0.0.0:3000/api/recipes/2
    // And show the decoded version:
    console.log(decoded);

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

server.route(require('./routes'));

server.start(function () {

    console.log('Server listening at:', server.info.uri);
});
