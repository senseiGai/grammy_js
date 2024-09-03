module.exports = (bot) => {
  bot.on("msg").filter(
    (ctx) => {
      return ctx.from.id === 456436694;
    },
    async (ctx) => {
      await ctx.reply("Hey Admin");
    }
  );
};
