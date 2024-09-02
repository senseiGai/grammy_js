const translations = {
  en: require("../translations/en.json"),
  ru: require("../translations/ru.json"),
};

const getLocalizedMessage = (ctx, key) => {
  const lang = ctx.session.language;
  return translations[lang][key];
};

module.exports = { getLocalizedMessage };
