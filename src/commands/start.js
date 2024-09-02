const { getTimeBasedGreeting } = require("../utils/getTimeBasedGreeting");
const { Keyboard } = require("grammy");

module.exports = (bot) => {
  const languageKeyBoard = new Keyboard()
    .text("Русский 🇷🇺")
    .text("English 🏴󠁧󠁢󠁥󠁮󠁧󠁿")
    .resized();
  bot.command("start", async (ctx) => {
    const greeting = getTimeBasedGreeting(ctx);
    await ctx.reply(`${greeting}, I am a testing bot on grammY js`);

    await ctx.reply("I suggest you to choose a language 👇", {
      reply_markup: languageKeyBoard,
    });
  });
};
