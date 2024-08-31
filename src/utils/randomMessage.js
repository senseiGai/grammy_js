const { Random } = require("random-js");

const getRandomMessage = (messages, min, max) => {
  const random = new Random();

  const randomIndex = random.integer(min, max - 1);

  return messages[randomIndex];
};

module.exports = { getRandomMessage };
