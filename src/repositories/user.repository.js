// Users
const userList = [
    {
        key: '5589632145',
        username: 'admin',
        password: 'admin',
        mcKey: 'f346455dd32f72058dfd832ca4d3671f-us4',
        tcKey: 'f49030733a03f3c1ff1a4a3eb459ad4c34b9be940dd31ed857913e073316a61d'
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