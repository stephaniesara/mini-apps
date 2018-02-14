var converter = require('./converter');
var fs = require('fs');

module.exports = {

	csv: {
		post: (req, res) => {
			console.log('POST REQUEST');
			converter.convertToCsv(req.body, (results) => {
				res.json(results);
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
						converter.convertToCsv(JSON.parse(data), (results) => {
							res.json(results);
						});
					}
					catch(e) {
						console.log(e);
						res.status(404).send('error! select file with valid JSON only');
					}
				}
			})

		}
	}
}