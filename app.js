var express = require('express');
var http = require('http');
var path = require('path');
var index = require('./routes/index');
var app = express();
var c = require('./routes/web-crawler.js');
app.set('port', process.env.PORT || 3005);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    //res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method){
        return res.send(200);
    }
    next();
});
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico'))); 
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'view')));
app.use(express.static(path.join(__dirname, 'out')));
app.use(express.session({ secret: "very secret" }));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.get('/', index.index);
app.get('/crawler/wiki/:month/:day',c.getData )
app.get('/home',index.index);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});