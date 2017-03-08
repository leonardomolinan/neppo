var mysql = require("mysql"),
value = 30,
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "5549843265",
        database: "PandaGame"
    });
connection.connect();

//function insert () {
		connection.query("select score from score order by score desc;",
					function(err, res){
						if(err){
							console.log(err);
							return cb(err, null);
						} else {
							var i, valor = [];
							for(i=0; i < res.length; i++){
								valor.push(res[i].score);
							}
							//return cb(err, valor);	
							console.log(valor);
						}
					});
	//}

//insert();