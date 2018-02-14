// console.log('in app.js');

$(document).ready(function() {
	console.log('ready!');
	$("#csvform").submit((event) => handleSubmit(event));
});

var handleSubmit = (event) => {
	// console.log('submit!');
	event.preventDefault();
	var message = $("#textbox").val();
	try {
		var json = JSON.parse(message);
		send(json);
		$("#textbox").val('');
	}
	catch(e) {
		alert('invalid, please submit valid JSON only');
	}
};

var send = (message) => {
	$.ajax({
		method: 'POST',
		url: 'http://127.0.0.1:3000/csv',
		// contentType: 'json/application',
		data: message,
		success: (data) => {
			$('#result').html('<pre>' + data + '</pre>');
		},
		error: (err) => {
			console.log('ERROR');
		}
	})
};