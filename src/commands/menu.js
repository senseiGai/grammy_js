const { InlineKeyboard } = require("grammy");

const menuKeyboard = new InlineKeyboard()
  .text("Get to know status", "order_status")
  .text("Support", "support");

const backKeyboard = new InlineKeyboard().text("Get back", "back");

module.exports = (bot) => {
  bot.command("menu", async (ctx) => {
    await ctx.reply("Choose a menu item", {
      reply_markup: menuKeyboard,
    });
  });

  bot.callbackQuery("order_status", async (ctx) => {
    await ctx.editMessageText("Order status: approved", {
      reply_markup: backKeyboard,
    });
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery("support", async (ctx) => {
    await ctx.editMessageText(
      "Text to creator for support: https://t.me/GayLordKadyrov",
      {
        reply_markup: backKeyboard,
      }
    );
    await ctx.answerCallbackQuery();
  });

  bot.callbackQuery("back", async (ctx) => {
    await ctx.editMessageText("Choose a menu item", {
      reply_markup: menuKeyboard,
    });
    await ctx.answerCallbackQuery();
  });
};
