const { getLocalizedMessage } = require("../utils/getLocalizedMessage");

const getTimeBasedGreeting = (ctx) => {
  const currentHour = new Date().getHours();
  if (currentHour >= 4 && currentHour < 12)
    return getLocalizedMessage(ctx, "Good Morning");
  if (currentHour >= 12 && currentHour < 18)
    return getLocalizedMessage(ctx, "Good Afternoon");
  if (currentHour >= 18 && currentHour < 24)
    return getLocalizedMessage(ctx, "Good Evening");
  return getLocalizedMessage(ctx, "Good Night");
};

module.exports = { getTimeBasedGreeting };
