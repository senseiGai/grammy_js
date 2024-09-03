const { Keyboard } = require("grammy");

const shareLabels = ["Geolocation", "Phone number"];

module.exports = (bot) => {
  const rows = shareLabels.map((label) => {
    if (label === "Geolocation") {
      return [Keyboard.requestLocation("📍 Share Location")];
    }
    if (label === "Phone number") {
      return [Keyboard.requestContact("📞 Share Phone Number")];
    }
    return [Keyboard.text(label)];
  });

  const shareKeyboard = Keyboard.from(rows)
    .placeholder("Share your data")
    .resized();

  bot.command("share", async (ctx) => {
    await ctx.reply("Share your data please!!!", {
      reply_markup: shareKeyboard,
    });
  });

  bot.on("message:contact", async (ctx) => {
    await ctx.reply("Thanks for sharing your phone number!", {
      reply_markup: { remove_keyboard: true },
    });
  });

  bot.on("message:location", async (ctx) => {
    await ctx.reply("Thanks for sharing your location!", {
      reply_markup: { remove_keyboard: true },
    });
  });
};
