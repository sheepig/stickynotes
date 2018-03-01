var express = require('express');
var app = express();

// 访问端口
app.set('port', process.env.PORT || 3000);

app.use('/static', express.static('static'));

app.use(app.router);


app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});
app.listen(app.get('port'), function(){
	console.log('stickynotes app listening on port 3000!');
});
