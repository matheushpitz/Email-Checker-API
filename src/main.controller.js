const Auth = require('./services/auth.service');
const ListsService = require('./services/lists.service');

const controller = (app) => {    

    app.get('/', async (req, res) => {
        let data = await MC.getListMembers('f346455dd32f72058dfd832ca4d3671f-us4', '597dca9c77');
        res.send(data);
    });

    app.post('/auth', async (req, res) => {
        res.send(await Auth.authenticate(req.body.username, req.body.password));
    });

    app.post('/lists', async (req, res) => {
        res.send(await ListsService.getAllLists(req.body.key));
    });

}

// Export the controller
module.exports = controller;