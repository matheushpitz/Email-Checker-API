// Users
const userList = [
    {
        key: '5589632145',
        username: 'admin',
        password: 'admin',
        mcKey: 'MAILCHIMP-API-KEY',
        tcKey: 'THECHECKER-API-KEY'
    },
];

const selectUser = (users) => {
    if(users.length > 0)
        return users[0];
    else
        return undefined;
}

const getById = async (id) => selectUser(userList.filter(u => u.key === id));
const getByUsernameAndPassword = async (username, password) => selectUser(userList.filter(u => u.username === username && u.password === password));

module.exports = {
    getById,
    getByUsernameAndPassword
}