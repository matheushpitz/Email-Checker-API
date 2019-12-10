const MC = require('../integrations/mc.integration');
const TC = require('../integrations/tc.integration');
const UserRepository = require('../repositories/user.repository');

const getAllMembersOfList = async (key, listId) => {    
    // Check integrity.
    if(key == undefined || key.length < 1 || listId == undefined || listId.length < 1)
        return [];
    // get user
    let user = await UserRepository.getById(key);    
    // get all members and then check the emails.
    return Promise.all((await MC.getListMembers(user.mcKey, listId)).map(async member => {
        // Check each email.
        let emailChecked = await TC.singleVerification(user.tcKey, member.email);        
        return {
            id: member.id,
            email: member.email,
            user: emailChecked.user,
            domain: emailChecked.domain,
            free: emailChecked.free,
            result: emailChecked.result,
            reason: emailChecked.reason
        }
    }));
}

module.exports = {
    getAllMembersOfList
};