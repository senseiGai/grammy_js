require("dotenv").config();
const { Bot, session } = require("grammy");

const bot = new Bot(process.env.BOT_API_KEY);

bot.use(session({ initial: () => ({ language: "en" }) }));

//start
require("./src/commands/start")(bot);

//change language
require("./src/commands/language")(bot);

//language handlers
require("./src/language-handlers/englishLanguage")(bot);
require("./src/language-handlers/russianLanguage")(bot);

//menu of commands
require("./src/commands/setMyCommads")(bot);

//unknown messages
require("./src/unknown-messages/unknown-messages")(bot);

bot.start();
