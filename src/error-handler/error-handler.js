const { GrammyError, HttpError } = require("grammy");

module.exports = (bot) => {
  bot.catch((err) => {
    const ctx = err.ctx; // Get the context of the error
    console.error(`Error while handling update ${ctx.update.update_id}: `);
    const e = err.error;

    if (e instanceof GrammyError) {
      console.error("Error in request", e.description);
    } else if (e instanceof HttpError) {
      console.error("Cannot connect to telegram", e);
    } else {
      console.error("Unknown error", e);
    }
  });
};
