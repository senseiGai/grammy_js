const { Keyboard } = require("grammy");
const { getLocalizedMessage } = require("../utils/getLocalizedMessage");

module.exports = (bot) => {
  bot.command("language", async (ctx) => {
    const languageKeyBoard = new Keyboard()
      .text("Русский 🇷🇺")
      .text("English 🏴󠁧󠁢󠁥󠁮󠁧󠁿")
      .resized();
    await ctx.reply(getLocalizedMessage(ctx, "changeLanguage"), {
      reply_markup: languageKeyBoard,
    });
  });
};
