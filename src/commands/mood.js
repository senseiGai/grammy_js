const { Keyboard } = require("grammy");

const labels = ["Bad", "Average", "Good"];

module.exports = (bot) => {
  bot.command("mood", async (ctx) => {
    const rows = labels.map((label) => {
      return [Keyboard.text(label)];
    });
    const moodKeyboard = Keyboard.from(rows).resized();

    await ctx.reply("How's yo mood?", {
      reply_markup: moodKeyboard,
    });
  });

  bot.hears(labels, async (ctx) => {
    await ctx.reply("Whatever u chose, I don't give a fuck", {
      reply_markup: { remove_keyboard: true },
    });
  });
};
