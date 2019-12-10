const MailChimp = require('mailchimp-api-v3');

const getLists = (key) => {
    return new Promise((resolve, reject) => {
        const mc = new MailChimp(key);
        mc.get(
            {
                path: '/lists'
            }
        ).then((data) => {
            resolve(data.lists.map(list => {
                return {
                    id: list.id,
                    name: list.name
                }
            }));
        });
    });    
}

const getListMembers = (key, listId) => {
    return new Promise((resolve, reject) => {
        const mc = new MailChimp(key);
        mc.get(
            {
                path: '/lists/'+ listId + '/members'
            }
        ).then((data) => {
            resolve(data.members.map(member => {
                return {
                    id: member.id,
                    email: member.email_address                    
                };
            }));
        });
    });    
}

module.exports = {
    getLists,
    getListMembers
};