const express = require('express');
const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => res.send('Goodbye world'));

app.listen(3000, () => console.log('Example app listening on port 3000'));