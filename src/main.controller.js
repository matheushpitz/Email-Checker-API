const Auth = require('./services/auth.service');
const MC = require('./integrations/mc.integration');

const controller = (app) => {
    app.get('/', async (req, res) => {
        let data = await MC.getListMembers('f346455dd32f72058dfd832ca4d3671f-us4', '597dca9c77');
        res.send(data);
    });
}

// Export the controller
module.exports = controller;