exports.find = function (request, reply) {

    var sql = 'SELECT * FROM users';
    var params = [];

    this.db.all(sql, params, function (err, results) {

        if (err) {
            throw err;
        }

        reply(results);
    });
};

exports.login = function (request, reply) {
    console.log(request.payload);
    // find the user by email or username (both unique)
    this.db.get('SELECT * FROM users WHERE email = ?', [request.payload.email], function (err, result) {

        if (err) {
            throw err;
        }

        if (typeof result !== 'undefined') {
            var bcrypt = require('bcrypt');
            console.log(result);
            bcrypt.compare(request.payload.password, result.password, function(err, isValid) {
               if (err) {
                   throw err;
               }
               if (isValid) {
                   // actually reply token
                   reply(result);
               } else {
                   reply('Not valid').code(401);
               }
            })
        } else {
            reply('Not valid').code(401);
        }
    })
    // error if no user
    // bcompare password
    // error if not equal
    // all good: return jwt
};

exports.create = function (request, reply) {

    var db = this.db;
    var uuid = this.uuid.v1();

    var bcrypt = require('bcrypt');
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(request.payload.password, salt, function (err, hash) {
            var password = hash
            var sql = 'INSERT INTO users (uuid, full_name, email, username, password) VALUES (?, ?, ?, ?, ?)';
            db.run(sql, [
                    uuid,
                    request.payload.full_name,
                    request.payload.email,
                    request.payload.username,
                    password
                ],
                function (err) {

                    if (err) {
                        throw err;
                    }

                    reply({
                        status: 'ok'
                    });
                });
        })
    });

};
