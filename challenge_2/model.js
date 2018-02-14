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

		var handleKeys = () => {
			var keys = Object.getOwnPropertyNames(data);
			if (keys[keys.length - 1] === 'children') {
				keys.splice(-1, 1);
			}
			result.push(keys.join(','));
			return keys;
		}
		
		var keys = handleKeys();
		csvStringify(keys, keys.length, data);
		callback(result.join('\n'));
	}
}