module.exports = (bot) => {
  bot.api.setMyCommands([
    {
      command: "start",
      description: "Start a bot",
    },
  ]);
};
