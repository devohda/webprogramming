var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('teamproject'));
app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});