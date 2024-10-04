const languages = require("./languages");

/**
 * Validates the provided language code.
 * @param {string} langcode - The language code to validate.
 * @returns {string} - Validation message.
 * @throws {Error} - If the langcode is invalid.
 */
exports.isValid = function (langcode) {
  if (!langcode || typeof langcode !== "string") return null;

  const language = languages.find(
    (lang) => lang.languageCodes === langcode.toLowerCase()
  );

  if (language) {
    return `${language.name} (${langcode}) is a valid language code.`;
  }
  return `${langcode} is not a valid language code.`;
};

/**
 * Retrieves the language name based on the language code.
 * @param {string} langcode - The language code to look up.
 * @returns {string | null} - The name of the language or null if not found.
 * @throws {Error} - If the langcode is invalid.
 */
exports.getLanguageName = function (langcode) {
  if (!langcode || typeof langcode !== "string") return null;
  const language = languages?.find(
    (lang) => lang.languageCodes === langcode.toLowerCase()
  );
  return language ? language.name : null;
};

/**
 * Retrieves the writing style of a specified language, either LTR (Left-to-Right) or RTL (Right-to-Left).
 *
 * @param {string} langcode - The language code to validate and retrieve the writing style.
 * @returns {string|null} - Returns the writing style of the language if found; otherwise, returns null.
 * @throws {Error} - Throws an error if the provided langcode is invalid (null or not a string).
 */
exports.getLanguageWritingStyle = function (langcode) {
  if (!langcode || typeof langcode !== "string") {
    return null;
  }

  const language = languages?.find(
    (lang) => lang.languageCodes === langcode.toLowerCase()
  );

  return language ? language.writingStyle : null;
};

/**
 * Checks the translation availability for a given language code.
 * @param {string} code - The language code to check.
 * @returns {Array | null} - An array of available translations or null if none.
 */
exports.checkTranslationAvailability = function (code) {
  const matchedLanguages = languages.filter(
    (lang) => lang.languageCodes === code
  );

  if (matchedLanguages.length > 0) {
    return matchedLanguages.map((language) => ({
      name: language.name,
      locale: language.locale,
      googleTranslate: !!language.googleTranslate,
      microsoftTranslate: !!language.microsoftTranslate,
      deeplTranslate: !!language.deeplTranslate,
      awsTranslate: !!language.awsTranslate,
      ibmTranslate: !!language.ibmTranslate,
      awsTranscribe: !!language.awsTranscribe
        ? language.awsTranscribe.code
        : false,
      googleStt: !!language.googleStt ? language.googleStt.code : false,
      googleTTS: !!language.googleTTS ? language.googleTTS.code : false,
      awsPolly: !!language.awsPolly ? language.awsPolly.code : false,
    }));
  }
  return null;
};
