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
    {
      command: "creator",
      description: "Creator of the bot",
    },
    {
      command: "mood",
      description: "What's your mood ",
    },
    {
      command: "share",
      description: "Share your data",
    },
  ]);
};
