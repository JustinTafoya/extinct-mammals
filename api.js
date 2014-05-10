
var Mammal = require('./Mammal')

exports.index = function (req, res){
	Mammal.find().sort('name').exec(function (err, mammals) {
		if (err) return res.json(500, err)

		res.json(200, mammals)	
	})
})


exports.create = function (req, res){
	var newMammal = new Mammal(req.body)
	newMammal.save(function (err, mammal) {
		if (err) return res.json(500, err)

	res.json(201, mammal)		
	})
	
}

