var express = require('express')
var app = express();

var initData = require('./wego/initData.js');
var indexPage = require('./wego/indexPage.js');

app.configure(function() {
	app.set('port', 18080);
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('expressdemo'));
	app.use(express.session());
	app.use(app.router);

	app.use(express.errorHandler());
});
// 首页
app.get('/', function(request, response) {
	 indexPage.all(response); 
});

//
app.get("/sites", function(request, response) {
	response.render('sites.ejs')
});

app.get("/mail", function(request, response) {
	response.render('mail.ejs')
});

app.get("/server", function(request, response) {
	response.render('server.ejs')
});

app.get("/customercenter", function(request, response) {
	response.render('customercenter.ejs')
});
app.get("/case", function(request, response) {
	response.render('case.ejs')
});
app.get("/support", function(request, response) {
	response.render('support.ejs')
});

app.get("/initData", function(request, response) {
	initData.ad();
	response.end('<p>ok</p>');
});

app.listen(18080);
