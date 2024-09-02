const { Random } = require("random-js");

const getRandomMessage = (messages) => {
  const random = new Random();
  const min = 0;
  const max = messages.length;

  const randomIndex = random.integer(min, max - 1);
  return messages[randomIndex];
};

module.exports = { getRandomMessage };
