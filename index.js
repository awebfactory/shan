var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');
var Sqlite3 = require('sqlite3');
var Jwt = require('hapi-auth-jwt2');

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

server.connection({ port: 3000 });

server.bind({ db: db });

server.register(Inert, function () {});

var people = { // our "users database"
    1: {
      id: 1,
      name: 'Jen Jones'
    }
};

// bring your own validation function
var validate = function (decoded, request, callback) {

    // do your checks to see if the person is valid
    if (!people[decoded.id]) {
      return callback(null, false);
    }
    else {
      return callback(null, true);
    }
};

server.register(Jwt, function (err) {

    if(err){
      console.log(err);
    }

    server.auth.strategy('jwt', 'jwt', true,
    { key: 'NeverShareYourSecret',          // Never Share your secret key
      validateFunc: validate,            // validate function defined above
      verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
    });
});

server.route(require('./routes'));

server.start(function () {

    console.log('Server listening at:', server.info.uri);
});
