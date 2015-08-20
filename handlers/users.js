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

