module.exports = (bot) => {
  bot.api.setMyCommands([
    {
      command: "start",
      description: "Start a bot",
    },
    {
      command: "language",
      description: "Change the language",
    },
  ]);
};
