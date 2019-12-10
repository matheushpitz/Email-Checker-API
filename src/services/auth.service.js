const User = require('../repositories/user.repository');

const authenticate = async (username, password) => {
    let user = await User.getByUsernameAndPassword(username, password);
    return {
        key: user != undefined ? user.key : '',
        attempt: new Date()
    }
}

module.exports = {
    authenticate
}