require("dotenv").config();
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_API_KEY);

//start
require("./src/commands/start")(bot);

//unknown messages
require("./src/unknown-message/unknown-message")(bot);

bot.start();
