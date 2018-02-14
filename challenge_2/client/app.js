console.log('in app.js');

$(document).ready(function() {
	console.log('ready!');
	$("#csvform").submit((event) => handleSubmit(event));
});


// test json
var testObj = {
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000
};

var testObj2 = {
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000,
    "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
};


var handleSubmit = (event) => {
	console.log('submit!');
	event.preventDefault();
	var message = $("#textbox").val();
	send(message);
};

var send = (message) => {
	console.log(message);

	// test with test object, see below
	$.ajax({
		method: 'POST',
		url: 'http://127.0.0.1:3000/csv',
		// contentType: 'json/application',
		data: testObj2, // TODO: CHANGE FROM FOR TESTING ONLY
		success: (data) => {
			console.log('SUCCESS');
			console.log('RECEIVED DATA', data);
			console.log('TYPE', typeof(data));
			document.getElementById('result').innerHTML = '<pre>' + data + '</pre>';
			// $('#result').text('<pre>' + data + '</pre>');
		},
		error: (err) => {
			console.log('ERROR');
		}
	})

};



//get request
	// request('http://127.0.0.1:3000/', (err, res, body) => {
	// 	console.log('request made');
	// });

	// 	var sendObj = {
	// 	url: 'http://127.0.0.1:3000/',
	// 	json: {
	// 		testProp: 'hello here'
	// 	},
	// }
	// request.post(sendObj, (err, res, body) => {
	// 	console.log('post request send back!');
	// });