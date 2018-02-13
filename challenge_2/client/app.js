console.log('in app.js');

$(document).ready(function() {
	console.log('ready!');
	$("#csvform").submit((event) => handleSubmit(event));
});

/*
// test json
{
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker"
}

*/
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
		data: {name: 'Stephanie', location: 'SF', color: 'teal'},
		success: () => {
			console.log('SUCCESS');
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