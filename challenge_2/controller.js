var model = require('./model');

module.exports = {
	get: (req, res) => {
		console.log('******GET REQUEST');
		// res.json(results);
		res.send('RETURNING GET REQUEST');
},

	post: (req, res) => {
		console.log('******POST REQUEST');
		// console.log('BODY', req.body);
		model.post(req.body, (results) => {
			console.log(results);
			res.send(results);
		});
	}
}