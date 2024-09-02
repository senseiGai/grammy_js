const { getTimeBasedGreeting } = require("../utils/getTimeBasedGreeting");

module.exports = (bot) => {
  bot.command("start", async (ctx) => {
    const greeting = getTimeBasedGreeting();
    await ctx.reply(`${greeting}, I am a grammY js testing bot`);
  });
};
