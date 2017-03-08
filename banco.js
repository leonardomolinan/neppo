  var express = require('express'),
    app = express(),
    valor = [],
    port = 3000,
    path = require('path'),
    staticPath = path.join(__dirname, 'public'),
    db = require("./query"),
    mysql = require("mysql"),
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "PandaGame"
    });
connection.connect();
app.use(express.static(staticPath));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/panda.html'));
});
function pagina(score, valor) {
    var code = "<!DOCTYPE html>" +
                "<html>" +
                    "<head>" +
                        "<meta charset='utf-8' />" +
                        "<style>" +
                            ".canvas {" +
                                "border: 1px solid #000;" +
                                "position: absolute;" +
                                "width: 600px;" +
                                "height: 600px;" +
                                "top: 0px;" +
                                "right: 0px;" +
                                "bottom: 0px;" +
                                "left: 0px;" +
                                "margin: auto;" +
                            "}" +
                            ".results {" +
                                "width: 350px;" +
                                "height: 300px;" +
                                "padding-top: 90px;" +
                                "padding-left: 100px;" +
                            "}" +
                            "h2{padding-left: 100px;padding-top: 50px;}" +
                        "</style>" +
                    "</head>" +
                    "<body>" +
                    	"<button type='button' onclick='restart()'>Restart</button>" +
                    	"<script>" +
							"function restart() { " +
    						" window.location = 'http://localhost:3000/'; " +
							"}" +
						"</script>" +
                        	"<div class='canvas'>" +
                            	"<h2>Your score: " + score + "</h2>" +
                            	"<div class='results'>" +
                                	"<h3>World ranking:</h3>";
    
    var i;
    console.log(valor);
    for (i = 0; i < 10; i += 1) {
        code += (i + 1) + "º - " + valor[i] + "<br>";
    }
    code += "</div></div></body></html>";
    return code;
}
app.get('/score', function(req, res) {
    var score = req.param('score'), html;
    console.log(score);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    db.select(connection, function (err, valor) {
        if (valor) {
            db.insert(connection, score);
            html = pagina(score, valor);
            res.write(html);
            res.end();
        } else {
            console.log(err);
            return;
        }
    });
});
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});
