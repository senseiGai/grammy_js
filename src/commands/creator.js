module.exports = (bot) => {
  bot.command("creator", async (ctx) => {
    ctx.reply(`Creator of this bot is @GayLordKadyrov`),
      {
        parse_mode: "HTML",
      };
  });
};
