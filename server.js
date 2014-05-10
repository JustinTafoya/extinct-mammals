var mongoose = require('mongoose');
var express = require('express')
var bodyParser = require('body-parser');
var app = express()
mongoose.connect('mongodb://localhost/mammals');

app.use(bodyParser());

var mammalSchema = new mongoose.Schema({
  name:  String,
  type: String,
  year_extinct:  Number,
});

var Mammal = mongoose.model('Mammal', mammalSchema);

app.get('/', function (req, res){

	Mammal.find().sort('name').exec(function (err, mammals) {
		if (err) return res.json(500, err)

		res.json(200, mammals)	
	})
})

app.post('/', function (req, res){
	var newMammal = new Mammal(req.body)
	newMammal.save(function (err, mammal) {
		if (err) return res.json(500, err)

	res.json(201, mammal)	
	})
	
})


app.listen(2000, function(){
	console.log("Hello")
})


