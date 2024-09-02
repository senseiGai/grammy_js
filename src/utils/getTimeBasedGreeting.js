const getTimeBasedGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour >= 4 && currentHour < 12) return "Good Morning";
  if (currentHour >= 12 && currentHour < 18) return "Good Afternoon";
  if (currentHour >= 18 && currentHour < 24) return "Good Evening";
  return "Good Night";
};

module.exports = { getTimeBasedGreeting };
