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
		send(json, 'csv');
		$("#textbox").val('');
	}
	catch(e) {
		alert('invalid, please submit valid JSON only');
	}
};

var handleFileSelect = (event) => {
	console.log('file selected!');
	var filename = event.target.files[0].name;
	send({filename: filename}, 'file');
};


var send = (message, path) => {
	$.ajax({
		method: 'POST',
		url: 'http://127.0.0.1:3000/' + path,
		// contentType: 'json/application',
		data: message,
		success: (data) => {
			$('#result').html('<pre>' + data + '</pre>');
		},
		error: (err) => {
			console.log('ERROR');
			alert('invalid, please select file with valid JSON only');
		}
	})
};