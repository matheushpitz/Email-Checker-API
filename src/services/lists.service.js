const MC = require('../integrations/mc.integration');
const UserRepository = require('../repositories/user.repository');

const getAllLists = async (key) => {
    if(key == undefined || key.length < 1)
        return [];        
    return await MC.getLists( (await UserRepository.getById(key)).mcKey);
}

module.exports = {
    getAllLists
};