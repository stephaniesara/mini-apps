console.log('in app.js');

$(document).ready(function() {
	console.log('ready!');
	$("#csvform").on('submit', (event) => {
		console.log('submit!');
		event.preventDefault();
	});
});