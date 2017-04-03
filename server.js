const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/getinfo', data.travelInfo);



app.listen(3020, function () {
    console.log('listening on port 3020');
})