const User = require('../repositories/user.repository');

const authenticate = async (username, password) => {
    // Get user
    let user = await User.getByUsernameAndPassword(username, password);
    // Return it
    return {
        key: user != undefined ? user.key : '',
        attempt: new Date()
    }
}

module.exports = {
    authenticate
}