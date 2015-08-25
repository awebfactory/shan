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

exports.findOne = function (request, reply) {
};

exports.create = function (request, reply) {
	
    var uuid = this.uuid.v1();
    var password = require('bcrypt').hashSync(request.payload.password, 10);

    var sql = 'INSERT INTO users (uuid, full_name, email, username, password) VALUES (?, ?, ?, ?, ?)';

    this.db.run(sql,
    [
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

        reply({ status: 'ok' });
    });
};
