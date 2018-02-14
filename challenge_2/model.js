module.exports = {

	post: (data, callback) => {
		var result = [];

		var convertToCsv = (keys, length, obj) => {
			var values = [];
			keys.forEach((key) => {
				if (obj[key]) {
					values.push(obj[key]);
				}
			});
			result.push(values.join(','));
			if (obj.children !== undefined) {
				obj.children.forEach((child) => {
					convertToCsv(keys, length, child);
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
		convertToCsv(keys, keys.length, data);
		callback(result.join('\n'));
	}
}