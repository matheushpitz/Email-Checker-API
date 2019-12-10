const https = require('https');

const singleVerification = (key, email) => {
    return new Promise((resolve, reject) => {
        https.get('https://api.thechecker.co/v2/verify?email=' + email + '&api_key=' + key, (resp) => {
            let data = '';

            // Get the response data
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // Convert and resolve when it ends
            resp.on('end', () => {
                resolve(JSON.parse(data));
            });

        }).on("error", (err) => {
            resolve(undefined);
        });
    });
}

module.exports = {
    singleVerification
};