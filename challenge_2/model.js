module.exports = {
	get: (callback) => {

	},

	post: (data, callback) => {
		console.log('DATA IS', data);
		console.log('TYPE', typeof(data));
		// data = JSON.parse(data);
		var result = [];

		var csvString = (keys, length, obj) => {
			var values = [];
			keys.forEach((key) => {
				values.push(obj[key]);
			});
			result.push(values.join(','));
			if (obj.children !== undefined) {
				obj.children.forEach((child) => {
					csvString(keys, length, child);
				});
			}
		};

		var keys = Object.keys(data);
		var length = keys.length;
		keys.splice(length - 1, 1);
		result.push(keys);
		csvString(keys, length, data);


		callback(result.join('\n'));
	}
}