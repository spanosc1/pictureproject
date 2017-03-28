var path = require('path');
var multer = require('multer');
var upload = multer({dest: 'app/public/uploads/'});
var fs = require('fs');
var obj = require('../public/data/images.json')
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){
	app.post('/', upload.any(), function(req, res) {
		var filename = req.files[0].filename;
		obj.images.push(filename);
		console.log(obj);
		console.log(obj.images);
		fs.writeFile(path.join(__dirname + '/../public/data/images.json'), JSON.stringify(obj), function(err) {
			if(err) {
				return console.log(err);
			}
			console.log("success");
		});
		res.sendFile(path.join(__dirname + '/../public/html/index.html'));
	});
	app.get('/images', function(req, res) {
		res.send(obj);
	});
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/index.html'));
	});
}