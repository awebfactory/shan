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
	
    uuid = this.uuid.v1();

    var sql = 'INSERT INTO users (uuid, full_name, email, username, password) VALUES (?, ?, ?, ?, ?)';

    this.db.run(sql,
    [
        request.payload.uuid,
        request.payload.full_name,
        request.payload.email,
        request.payload.username,
        request.payload.password,
    ],
    function (err) {

        if (err) {
            throw err;
        }

        reply({ status: 'ok' });
    });
};
