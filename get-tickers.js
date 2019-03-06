const axios = require('axios');

const apiKey = 'OKOZ7LJBWW2EhiXU9kYr68wOhvlCZ-ln';
const baseUrl = 'https://api.mlab.com/api/1';
const dbCollection = 'databases/uphold-tickers/collections/tickers';
const postUrl = `${baseUrl}/${dbCollection}?apiKey=${apiKey}`;

module.exports = (context, cb) => {
    const query = Object.assign({}, context.query);
    axios
        .get(`${postUrl}&fo=${JSON.stringify(query)}`)
        .then(response => {
            cb(null, { data: response.data });
        })
    .catch(err => cb(err, null));
}