const { override } = require("customize-cra");

module.exports = override((config) => {
  // Increase the maximum size of files to 2MB
  config.module.rules[1].oneOf.enforce = "pre";
  config.module.rules[1].oneOf.exclude = "/assests/iimages/";
  config.module.rules[1].oneOf.options = {
    limit: 2 * 1024 * 1024, // 2MB
  };
  return config;
});
