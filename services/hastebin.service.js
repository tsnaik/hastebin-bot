const axios = require('axios')

createSnippet = (snippet) => axios.post(
    'https://hastebin.com/documents', snippet);

module.exports = {
    createSnippet
}