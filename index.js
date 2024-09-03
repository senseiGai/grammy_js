require("dotenv").config();
const { Bot, session } = require("grammy");

const bot = new Bot(process.env.BOT_API_KEY);

bot.use(session({ initial: () => ({ language: "en" }) }));

//menu of commands
require("./src/commands/setMyCommads")(bot);

//start
require("./src/commands/start")(bot);

//change language
require("./src/commands/language")(bot);

//creator of the bot
require("./src/commands/creator")(bot);

//language handlers
require("./src/language-handlers/englishLanguage")(bot);
require("./src/language-handlers/russianLanguage")(bot);

//custom filter
// require("./src/custom-filter/custom-filter")(bot);

// another way to use keyboard more customisable
require("./src/commands/mood")(bot);

//share data
require("./src/commands/share")(bot);

//spark
require("./src/spark/spark")(bot);

//unknown messages
require("./src/unknown-messages/unknown-messages")(bot);

bot.start();
