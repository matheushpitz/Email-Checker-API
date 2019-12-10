const Auth = require('./services/auth.service');

const controller = (app) => {
    app.get('/', async (req, res) => {
        let data = await Auth.authenticate('admin', 'admin');
        res.send(data);
    });
}

// Export the controller
module.exports = controller;