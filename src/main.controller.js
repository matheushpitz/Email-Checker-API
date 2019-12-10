const Auth = require('./services/auth.service');
const ListsService = require('./services/lists.service');
const MembersService = require('./services/members.service');

const controller = (app) => {       

    app.post('/auth', async (req, res) => {
        res.send(await Auth.authenticate(req.body.username, req.body.password));
    });

    app.post('/lists', async (req, res) => {
        res.send(await ListsService.getAllLists(req.body.key));
    });

    app.post('/members', async (req, res) => {        
        res.send(await MembersService.getAllMembersOfList(req.body.key, req.body.listId));
    });

}

// Export the controller
module.exports = controller;