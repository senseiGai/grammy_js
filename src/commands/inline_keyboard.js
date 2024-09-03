const { InlineKeyboard } = require("grammy");

module.exports = (bot) => {
  bot.command("inline_keyboard", async (ctx) => {
    const inlineKeyboard = new InlineKeyboard()
      .text("1", "button-1")
      .row()
      .text("2", "button-2")
      .row()
      .text("3", "button-3");

    await ctx.reply("Choose a button", {
      reply_markup: inlineKeyboard,
    });
  });
};
