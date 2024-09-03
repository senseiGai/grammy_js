const { InlineKeyboard } = require("grammy");

module.exports = (bot) => {
  bot.command("support", async (ctx) => {
    const supportInlineKeyboard = new InlineKeyboard()
      .url("Text to creator for support", "https://t.me/GayLordKadyrov")
      .row();
    await ctx.reply("Support", {
      reply_markup: supportInlineKeyboard,
    });
  });
};
