const axios = require('axios');
const apiKey = 'OKOZ7LJBWW2EhiXU9kYr68wOhvlCZ-ln';
const baseUrl = 'https://api.mlab.com/api/1';
const dbCollection = 'databases/uphold-tickers/collections/tickers';
const postUrl = `${baseUrl}/${dbCollection}?apiKey=${apiKey}`;

module.exports = (context, cb) => {
    const currentDate = new Date();
    axios
        .get('https://api.uphold.com/v0/ticker/MXN')
        .then(response => {
            const dataSet = {
                data: response.data,
                date: {
                    fullDate: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
                    month: `${currentDate.getMDate()}-${currentDate.getMonth()}`,
                    day: `${currentDate.getMonth()}-${currentDate.getFullYear()}`,
                    time: `${date.getHours()}:${date.getMinutes()}`,
                    timeId: `${formatDate(currentDate)}[${formatTime(currentDate)}]`
                }
            }

            axios
                .post(postUrl, dataSet)
                .then(postResponse => cb(null, postResponse))
                .catch(err => cb(err, null));
        })
        .catch(err => cb(err, null));
};