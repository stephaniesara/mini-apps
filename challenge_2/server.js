const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// const router = require('express').Router()

app.set('port', 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // IMPT!!!
app.use(morgan('dev'));
app.use(cors());

app.get('/csv', (req, res) => {
	console.log('GET');
	// res.status(200).send('RETURNING GET REQUEST');
	// res.json(results);
	res.send('RETURNING POST REQUEST');
});

app.post('/csv', (req, res) => {
	// res.set({'content-type': 'application/json'});
	console.log('POST');
	console.log('BODY', req.body);
	res.sendStatus(201);
});

app.use(express.static('client'));

app.listen(app.get('port'), () => {
	console.log('CSV app listening on port 3000')
});