const controller = require('./src/main.controller');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Call controller
controller(app);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});