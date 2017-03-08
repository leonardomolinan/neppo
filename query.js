module.exports = {
    insert: function(connection, value) {
        connection.query("insert into score(score) values (" + value + ");",
                        function(err, res){
            if (err) {
                console.log(err);
                return;
            }
            console.log(res);
        });
    },
    
    select: function(connection, cb) {
        connection.query("select score from score order by score desc;",
                        function(err, res) {
                    if (err) {
                        console.log(err);
                        return cb(err, null);
                    }
                    var i, values = [];
                    for (i = 0; i< res.length; i += 1){
                        values.push(res[i].score);
                    }
                    return cb(err, values);
            });
    }
}