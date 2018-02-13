module.exports = {
	get: (callback) => {

	},

	post: (data, callback) => {
		var result = [];

		var csvString = (keys, length, obj) => {
			var values = [];
			for (var i = 0; i < length; i++) {
				if (keys[i] !== 'children') {
					values.push(obj[keys[i]]);
					if (keys[i+1] === 'children') {
						result.push(values.join(','));
					}
				} else {
					var childrenArr = obj.children;
					if (childrenArr !== undefined) {
						childrenArr.forEach((child) => {
							csvString(keys, length, child);
						});
					}
				}
			};
			
		};

		var keys = Object.keys(data);
		result.push(keys);
		csvString(keys, keys.length, data);

		console.log('RESULT', result.join('\n'));

		callback();
	}
}