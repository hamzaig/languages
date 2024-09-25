const languages = require("./languages");
const defaultl = require("./defaultLangLocales");

exports.isValid = function (langcode) {
  const language = languages.find(lang => lang.languageCodes === langcode.toLowerCase());

  if (language) {
    return `${language.name} (${langcode}) is a valid language code.`;
  }
  return `${langcode} is not a valid language code.`;
};

exports.getLanguageName = function (langcode) {
  const language = languages.find(lang => lang.languageCodes === langcode.toLowerCase());
  return language ? language.name : null; 
};

exports.checkTranslationAvailability = function (code) {
  const matchedLanguages = languages.filter(lang => lang.languageCodes === code);

  if (matchedLanguages.length > 0) {
    
    return matchedLanguages.map(language => ({
      name: language.name,  
      googleTranslate: !!language.googleTranslate,
      microsoftTranslate: !!language.microsoftTranslate,
      deeplTranslate: !!language.deeplTranslate,
      awsTranslate: !!language.awsTranslate,
      ibmTranslate: !!language.ibmTranslate,
      awsTranscribe: !!language.awsTranscribe,
      googleStt: !!language.googleStt,
      googleTTS: !!language.googleTTS,
      awsPolly: !!language.awsPolly
    }));
  }
  return null;
};


console.log(exports.checkTranslationAvailability('ar'));


