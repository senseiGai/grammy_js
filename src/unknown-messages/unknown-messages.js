const { getRandomMessage } = require("../utils/getRandomMessage");
const { getLocalizedMessage } = require("../utils/getLocalizedMessage");

module.exports = (bot) => {
  bot.on("message", async (ctx) => {
    try {
      if (ctx.message.text) {
        const localizedTextMessages = getLocalizedMessage(ctx, "textMessages");
        await ctx.reply(getRandomMessage(localizedTextMessages));
      } else if (ctx.message.photo) {
        const localizedPhotoMessages = getLocalizedMessage(
          ctx,
          "photoMessages"
        );
        await ctx.reply(getRandomMessage(localizedPhotoMessages));
      } else if (ctx.message.voice) {
        const localizedVoiceMessages = getLocalizedMessage(
          ctx,
          "voiceMessages"
        );
        await ctx.reply(getRandomMessage(localizedVoiceMessages));
      } else if (ctx.message.sticker) {
        const localizedStickerMessages = getLocalizedMessage(
          ctx,
          "stickerMessages"
        );
        await ctx.reply(getRandomMessage(localizedStickerMessages));
      }
    } catch (error) {
      console.error("Error handling message:", error);
      await ctx.reply("An error occurred while processing your request.");
    }
  });
};
