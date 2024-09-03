module.exports = (bot) => {
  bot.hears(/spark/i, async (ctx) => {
    //it make whatever capitalize or not
    ctx.react("🔥");
    ctx.reply(
      "<a href='https://sparkstudio.kz/home'>Spark studio</a> is the <b>best</b> studio have ever existed!",
      {
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }
    );
  });
};
