const { getTimeBasedGreeting } = require("../utils/getTimeBasedGreeting");

module.exports = (bot) => {
  bot.hears("Русский 🇷🇺", async (ctx) => {
    ctx.session.language = "ru";
    const greeting = getTimeBasedGreeting(ctx);
    await ctx.reply(
      `${greeting}, Я тестовый бот на grammY js`,

      {
        reply_markup: {
          remove_keyboard: true,
        },
      }
    );
  });
};
