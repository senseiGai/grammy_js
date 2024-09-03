module.exports = (bot) => {
  bot.on("callback_query:data", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply(`You pressed a ${ctx.callbackQuery.data}`);
  });
};
