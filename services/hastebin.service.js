const axios = require('axios')

createSnippet = async (snippet) => axios.post(
    'https://hastebin.com/documents', snippet);

module.exports = {
    createSnippet
}