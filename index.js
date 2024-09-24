const languages = require("./languages");

exports.isValid = function (langcode) {
  return langs.lang.hasOwnProperty(langcode);
};
