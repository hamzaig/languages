# Language Details Package

Created By [Chat GPT Translator](https://www.gpttranslator.co)

**Language Details** is a comprehensive npm package that offers detailed information about various languages. It includes locale codes, simple language codes, and indicates whether these languages are supported by popular translation and speech services like Google Translate, AWS Translate, Microsoft Translator, and more.

## Installation

Install the package using your preferred package manager:

```bash
# Using npm
npm install language-details

# Using yarn
yarn add language-details
```

## Features

This package provides multiple functions for:

- Validating language codes.
- Retrieving language names from codes.
- Checking translation availability across popular services.
- Retrieving the writing style of languages (LTR or RTL).

## Usage

Below are examples showcasing the main functionalities of the package:

### Example 1: Check if a Language Code is Valid

```javascript
const languageDetails = require("language-details");

// Validate language code
const isValid = languageDetails.isValid("af");
console.log(isValid); // Output: Afrikaans (af) is a valid language code.
```

### Example 2: Retrieve Language Name by Code

This function supports both exact and base language code matching. For instance, if a specific regional code is not available, it will fall back to the base language.

````javascript
const languageNameExact = languageDetails.getLanguageName("af");
console.log(languageNameExact); // Output: Afrikaans

const languageNameRegional = languageDetails.getLanguageName("es-419");
console.log(languageNameRegional); // Output: Spanish


This example demonstrates both exact code matching (`"af" -> Afrikaans`) and base code matching (`"es-419" -> Spanish`), showcasing the enhanced functionality of your `getLanguageName` function. Let me know if this aligns with your requirements!


### Example 3: Check Translation and Speech Service Availability

```javascript
const translationAvailability =
  languageDetails.checkTranslationAvailability("af");
console.log(translationAvailability);

// Output:
[
  {
    name: "Afrikaans",
    locale: "af-ZA",
    googleTranslate: "af",
    microsoftTranslate: "af",
    deeplTranslate: false,
    awsTranslate: "af",
    ibmTranslate: false,
    awsTranscribe: false,
    googleStt: false,
    googleTTS: false,
    awsPolly: false,
  },
];
````

### Example 4: Check Translation and Speech Service Availability using Locale

```javascript
const translationAvailability =
  languageDetails.checkTranslationAvailabilityUsingLocale("en-us");
console.log(translationAvailability);

// Output:
[
  {
    name: "English",
    locale: "en-US",
    googleTranslate: "en",
    microsoftTranslate: "en",
    deeplTranslate: "EN",
    awsTranslate: "en",
    ibmTranslate: "en",
    awsTranscribe: "en-US",
    googleStt: "en-US",
    googleTTS: "en-US",
    awsPolly: "en-US",
  },
];
```

### Example 4: Retrieve Writing Style of a Language

```javascript
const writingStyle = languageDetails.getLanguageWritingStyle("ar");
console.log(writingStyle); // Output: RTL
```

### Example 5: Get All Languages

```javascript
const allLanguages = languageDetails.getAllLanguages();
console.log(allLanguages); // Output: All available languages
```

## Available Functions

The package provides several utility functions to work with language data:

- `isValid(langCode)`: Validates the provided language code and returns its name if valid.
- `getLanguageName(langCode)`: Retrieves the full language name for a given language code. Supports exact and base language code matching (e.g., returns "Spanish" for both "es-419" and "es").
- `checkTranslationAvailability(langCode)`: Checks if the language is supported by various translation and speech services.
- `checkTranslationAvailabilityUsingLocale(locale)`: Checks if the language is supported by various translation and speech services using locale.
- `getLanguageWritingStyle(langCode)`: Retrieves the writing style of a specified language (either LTR or RTL). If the language code is invalid, it returns null.
- `getAllLanguages()`: Returns an array of all available languages.

## API Reference

### `isValid(languageCode)`

- **Description**: Verifies if the provided language code is valid.
- **Parameters**:
  - `languageCode` (string): The language code to validate.
- **Returns**: A string indicating whether the code is valid, along with the language name.

### `getLanguageName(languageCode)`

- **Description**: Fetches the full language name corresponding to a language code.
- **Parameters**:
  - `languageCode` (string): The language code.
- **Returns**: The language name if the code is valid; otherwise, `null`.

### `checkTranslationAvailability(languageCode)`

- **Description**: Checks the availability of translation and speech services for a given language.
- **Parameters**:
  - `languageCode` (string): The language code to check.
- **Returns**: An array of objects that details the support across various translation services such as Google Translate, AWS Translate, Microsoft Translator, and others.

### `checkTranslationAvailabilityUsingLocale(langLocal)`

- **Description**: Checks the availability of translation and speech services for a given language By passing language locale.
- **Parameters**:
  - `langLocal` (string): The language locale to check.
- **Returns**: An array of objects that details the support across various translation services such as Google Translate, AWS Translate, Microsoft Translator, and others or null.

### `getLanguageWritingStyle(languageCode)`

- **Description**: Retrieves the writing style of a specified language, either LTR (Left-to-Right) or RTL (Right-to-Left).
- **Parameters**:
  - `languageCode` (string): The language code to validate and retrieve the writing style.
- **Returns**: Returns the writing style of the language if found; otherwise, returns `null`.
- **Throws**: An error if the provided `languageCode` is invalid (null or not a string).

### `getAllLanguages()`

- **Description**: Returns an array of all available languages.
- **Returns**: An array of objects containing language details, such as name, locale, and writing style.

## Supported Services

The package provides support information for the following translation and speech services:

- **Google Translate**: Checks if the language code is supported by Google Translate.
- **Microsoft Translator**: Indicates support from Microsoft Translator.
- **DeepL**: Identifies whether the language is supported by DeepL.
- **AWS Translate**: Checks AWS Translate compatibility.
- **IBM Watson**: Verifies if IBM Watson Language Translator supports the language.
- **AWS Transcribe**: Checks if the language code is valid for AWS Transcribe speech recognition.
- **Google Speech-to-Text (STT)**: Verifies compatibility with Google Speech-to-Text.
- **Google Text-to-Speech (TTS)**: Checks support for Google Text-to-Speech.
- **AWS Polly**: Indicates AWS Polly Text-to-Speech support.

## Running Tests

To ensure the stability of the package, write unit tests for any changes and run them with:

```bash
npm test
```

## Contributing

We welcome contributions! If you'd like to help improve this package, feel free to submit issues or pull requests via our [GitHub repository](#). Please ensure all code contributions are accompanied by relevant unit tests.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
