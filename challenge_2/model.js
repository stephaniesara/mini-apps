module.exports = {
	get: (callback) => {
	},

	post: (data, callback) => {
		var result = [];

		var csvStringify = (keys, length, obj) => {
			var values = [];
			keys.forEach((key) => {
				values.push(obj[key]);
			});
			result.push(values.join(','));
			if (obj.children !== undefined) {
				obj.children.forEach((child) => {
					csvStringify(keys, length, child);
				});
			}
		};

		var keys = Object.keys(data);
		var length = keys.length;
		keys.splice(length - 1, 1);
		result.push(keys);
		csvStringify(keys, length, data);

		callback(result.join('\n'));
	}
}