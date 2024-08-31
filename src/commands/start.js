module.exports = (bot) => {
  bot.command("start", async (ctx) => {
    await ctx.reply("Hello I am a grammY js testing bot");
  });
};
