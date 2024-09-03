module.exports = (bot) => {
  bot.callbackQuery([/button-[1-2]/], async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply("You chose a button");
  });
};
