const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// const router = require('express').Router()
var controller = require('./controller');

app.set('port', 3000);

// middleware, matches to any path
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // IMPT!!!
app.use(morgan('dev'));
app.use(cors());

app.post('/csv', controller.csv.post);

app.post('/file', controller.file.post);

app.use(express.static('client'));

app.listen(app.get('port'), () => {
	console.log('CSV app listening on port 3000')
});