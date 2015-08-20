var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');
var Sqlite3 = require('sqlite3');

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

server.route(require('./routes'));

server.start(function () {

    console.log('Server listening at:', server.info.uri);
});
