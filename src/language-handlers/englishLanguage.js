module.exports = (bot) => {
  bot.hears(/English 🏴/, async (ctx) => {
    ctx.session.language = "en";
    await ctx.reply(
      "You have selected English. All future messages will be in English. 😊",
      {
        reply_markup: {
          remove_keyboard: true,
        },
      }
    );
  });
};
