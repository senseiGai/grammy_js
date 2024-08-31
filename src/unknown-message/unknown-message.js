const { getRandomMessage } = require("../utils/randomMessage");

const replyMessages = [
  "I don't really know what to answer...",
  "Really?",
  "Are you sure about what you types?",
  "I've no reply...",
];

module.exports = (bot) => {
  bot.on("message", async (ctx) => {
    ctx.reply(getRandomMessage(replyMessages, 0, replyMessages.length));
  });
};
