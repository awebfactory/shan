exports.login = function (request, reply) {
    //console.log(request.payload);
    var secret = this.secret;
    // find the user by email
    this.db.get('SELECT * FROM users WHERE email = ?', [request.payload.email], function (err, result) {
        //console.log('Result: ', result);
        if (err) {
            throw err;
        }
        if (typeof result !== 'undefined') {
            var bcrypt = require('bcrypt');
            bcrypt.compare(request.payload.password, result.password, function(err, isValid) {
               if (err) {
                   throw err;
               }
               if (isValid) {
                   var JWT = require('jsonwebtoken');
                   var token = JWT.sign({ uuid: result.uuid}, secret);
                   //reply(token);
                   reply({
                       token: token,
                       user: result
                   })
               } else {
                   reply('Not valid').code(401);
               }
            })
        } else {
            reply('Not valid').code(401);
        }
    })
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
