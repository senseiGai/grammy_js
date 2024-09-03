require("dotenv").config();
const { Bot, session } = require("grammy");
const { hydrate } = require("@grammyjs/hydrate");

const bot = new Bot(process.env.BOT_API_KEY);

bot.use(session({ initial: () => ({ language: "en" }) }));
bot.use(hydrate());

//menu of commands
require("./src/commands/setMyCommads")(bot);

//start
require("./src/commands/start")(bot);

//change language
require("./src/commands/language")(bot);

//menu
require("./src/commands/menu")(bot);

//creator of the bot
require("./src/commands/creator")(bot);

//language handlers
require("./src/language-handlers/englishLanguage")(bot);
require("./src/language-handlers/russianLanguage")(bot);

// another way to use keyboard more customisable
require("./src/commands/mood")(bot);

//share data
require("./src/commands/share")(bot);

//spark
require("./src/spark/spark")(bot);

//inline keyboard
require("./src/commands/inline_keyboard")(bot);

//callback query
require("./src/callback-query/callback-query")(bot);

//bot on callback query
require("./src/callback-query/bot-on-callback-query")(bot);

//support command
require("./src/commands/support")(bot);

//custom filter
// require("./src/custom-filter/custom-filter")(bot);

//unknown messages
require("./src/unknown-messages/unknown-messages")(bot);

bot.start();
