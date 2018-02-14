var model = require('./model');

module.exports = {
	get: (req, res) => {
	},

	post: (req, res) => {
		console.log('POST REQUEST');
		model.post(req.body, (results) => {
			res.send(results);
		});
	}
}