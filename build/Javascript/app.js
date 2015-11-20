var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

app.get ('/', function (req,res){
	res.send('welcome to my local server');
});