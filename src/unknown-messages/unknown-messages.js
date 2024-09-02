const { getRandomMessage } = require("../utils/getRandomMessage");
const {
  voiceMessages,
  photoMessages,
  textMessages,
} = require("../utils/messageContent");

module.exports = (bot) => {
  bot.on("message", async (ctx) => {
    if (ctx.message.text) {
      ctx.reply(getRandomMessage(textMessages, 0, textMessages.length));
    } else if (ctx.message.photo) {
      ctx.reply(getRandomMessage(photoMessages, 0, photoMessages.length));
    } else if (ctx.message.voice) {
      ctx.reply(getRandomMessage(voiceMessages, 0, voiceMessages.length));
    }
  });
};
