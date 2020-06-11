var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 
var session = require('express-session'); 
var fs = require("fs");
var router = require('./router/main')(app);

// ������ ���� �� �ֵ��� HTML �� ��ġ�� �������ݴϴ�. 
app.set('views', __dirname + '/views'); 

// ������ HTML �������� �� ��, EJS������ ����ϵ��� �����մϴ�. 
app.set('view engine', 'ejs'); 
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function (){
    console.log("Express server has started on port 3000") 
});

/*// ��Ÿ��(CSS) �����ϱ� 
app.use(express.static('public')); 

// "localhost:3000/dudukri"���� ���� -> ��������� 
var routes = require('./routes/dudukri_server_html'); app.use('/dudukri', routes);
var users = require('./routes/users'); app.use('/users', users);*/
