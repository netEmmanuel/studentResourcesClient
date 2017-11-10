var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080 );

// pathlocationStrategy

app.get('/', function(req, res, next) {
   res.sendFile(path.join(__dirname + '/index.html' ));
  });
    console.log("console listening");
