var express = require('express');
var proxy = require('express-http-proxy');
var app = express();

app.use('/service', proxy('http://192.168.99.100:9191', {
    forwardPath: function (req, res) {
        return "/service" + require('url').parse(req.url).path;
    }
}));

app.use('/', express.static('dist'));

app.listen(9099);

console.log("Server started on port 9099");