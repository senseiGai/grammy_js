const { getRandomMessage } = require("../utils/getRandomMessage");
const {
  voiceMessages,
  photoMessages,
  textMessages,
  stickerMessages,
} = require("../utils/messageContent");

module.exports = (bot) => {
  bot.on("message", async (ctx) => {
    if (ctx.message.text) {
      await ctx.reply(getRandomMessage(textMessages, 0, textMessages.length));
    } else if (ctx.message.photo) {
      await ctx.reply(getRandomMessage(photoMessages, 0, photoMessages.length));
    } else if (ctx.message.voice) {
      await ctx.reply(getRandomMessage(voiceMessages, 0, voiceMessages.length));
    } else if (ctx.message.sticker) {
      await ctx.reply(
        getRandomMessage(stickerMessages, 0, stickerMessages.length)
      );
    }
  });
};
