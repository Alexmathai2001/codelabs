const OpenAI = require("openai");
require("dotenv").config()

const openai = new OpenAI({
    apiKey : process.env.OPEN_API_KEY,
    dangerouslyAllowBrowser : true
})

module.exports = openai