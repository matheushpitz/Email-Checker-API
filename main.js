const controller = require('./src/main.controller');
const express = require('express');
const app = express();

// Call controller
controller(app);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});