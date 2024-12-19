const languages = require("./languages");

/**
 * Validates the provided language code.
 * @param {string} langcode - The language code to validate.
 * @returns {string} - Validation message.
 * @throws {Error} - If the langcode is invalid
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
 * Searches across languageCodes, locale, and nested codes in a case-insensitive manner.
 * If no exact match is found, it will attempt to match the base language (e.g., 'es' for 'es-419').
 * @param {string} langcode - The language code to look up.
 * @returns {string | null} - The name of the language or null if not found.
 * @throws {Error} - If the langcode is invalid.
 */
exports.getLanguageName = function (langcode) {
  if (!langcode || typeof langcode !== "string") {
    throw new Error("Invalid language code provided.");
  }

  const lowerLangCode = langcode.toLowerCase();

  // Function to check if a language object has a matching code
  const matchCode = (codes) => {
    if (typeof codes === "string") {
      return codes.toLowerCase() === lowerLangCode;
    } else if (Array.isArray(codes)) {
      return codes.some((code) => code.toLowerCase() === lowerLangCode);
    }
    return false;
  };

  // Find the exact match first
  let language = languages.find(
    (lang) =>
      matchCode(lang.languageCodes) ||
      (lang.locale && matchCode(lang.locale)) ||
      (lang.awsTranscribe?.code && matchCode(lang.awsTranscribe.code)) ||
      (lang.googleStt?.code && matchCode(lang.googleStt.code)) ||
      (lang.googleTTS?.code && matchCode(lang.googleTTS.code)) ||
      (lang.awsPolly?.code && matchCode(lang.awsPolly.code)) ||
      (Array.isArray(lang.googleTTS?.voice) &&
        lang.googleTTS.voice.some((voice) => matchCode(voice.languageCodes)))
  );

  // If no exact match, attempt a fallback to the base language (first two characters)
  if (!language && lowerLangCode.length > 2) {
    const baseLangCode = lowerLangCode.slice(0, 2);

    language = languages.find(
      (lang) =>
        matchCode(lang.languageCodes) ||
        (lang.locale && matchCode(lang.locale)) ||
        (lang.awsTranscribe?.code &&
          matchCode(lang.awsTranscribe.code.slice(0, 2))) ||
        (lang.googleStt?.code && matchCode(lang.googleStt.code.slice(0, 2))) ||
        (lang.googleTTS?.code && matchCode(lang.googleTTS.code.slice(0, 2))) ||
        (lang.awsPolly?.code && matchCode(lang.awsPolly.code.slice(0, 2))) ||
        (Array.isArray(lang.googleTTS?.voice) &&
          lang.googleTTS.voice.some((voice) =>
            voice.languageCodes.some((code) =>
              code.toLowerCase().startsWith(baseLangCode)
            )
          ))
    );
  }

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
      googleTranslate: language.googleTranslate || false,
      microsoftTranslate: language.microsoftTranslate || false,
      deeplTranslate: language.deeplTranslate || false,
      awsTranslate: language.awsTranslate || false,
      ibmTranslate: language.ibmTranslate || false,
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

/**
 * Checks the translation availability for a given language code by passing locale.
 * @param {string} locale - The language locale to check.
 * @returns {Array | null} - An array of available translations or null if none.
 */
exports.checkTranslationAvailabilityUsingLocale = function (locale) {
  const matchedLanguages = languages.filter(
    (lang) => lang.locale.toLowerCase() === locale.toLocaleLowerCase()
  );

  if (matchedLanguages.length > 0) {
    return matchedLanguages.map((language) => ({
      name: language.name,
      locale: language.locale,
      googleTranslate: language.googleTranslate || false,
      microsoftTranslate: language.microsoftTranslate || false,
      deeplTranslate: language.deeplTranslate || false,
      awsTranslate: language.awsTranslate || false,
      ibmTranslate: language.ibmTranslate || false,
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

exports.getAllLanguages = function () {
  return languages.map(({ name, languageCodes, locale }) => ({
    name,
    languageCode: languageCodes,
    locale
  }));
}
