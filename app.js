var mongoose = require('mongoose');
var express = require('express')
var bodyParser = require('body-parser');
var app = express()


var api = require('./api')


app.use(bodyParser());

mongoose.connect('mongodb://localhost/mammals');


app.get('/', api.index)

app.get('/', api.create)


app.listen(2000, function(){
	console.log("Hello")
})