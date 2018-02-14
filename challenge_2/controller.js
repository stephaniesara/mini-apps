var model = require('./model');
var fs = require('fs');

module.exports = {

	csv: {
		post: (req, res) => {
			console.log('POST REQUEST');
			model.post(req.body, (results) => {
				res.send(results);
			});
		}
	},

	file: {
		post: (req, res) => {
			console.log('IN FILE POST REQUEST!');
			var filename = req.body.filename;
			var pathname = 'samples/' + filename;
			fs.readFile(pathname, 'utf8', (err, data) => {
				if (err) {
					console.log('error');
				} else {
					try {
						var json = JSON.parse(data);
						model.post(JSON.parse(data), (results) => {
							res.send(results);
						});
					}
					catch(e) {
						console.log(e);
						res.status(404).send('error! select file with valid JSON only');
						// alert('invalid, please submit valid JSON only');
					}
				}
			})

		}
	}
}