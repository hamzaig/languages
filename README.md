# Language Details Package

A comprehensive npm package that provides detailed information about various languages, including locale codes, simple language codes, and whether they are supported by popular translation services such as Google Translate, AWS Translate, Microsoft Translator, and more.

## Installation

You can install the package using npm:

npm install language-details

Or using yarn:

yarn add language-details

## Usage

The package provides multiple functions to check the validity of language codes, retrieve language names, and check translation availability.

### Example Usage

const languageDetails = require('language-details');

// Check if a language code is valid
const isValid = languageDetails.isValid('af');
console.log(isValid);
// Output: Afrikaans (af) is a valid language code.

// Retrieve the name of a language by its code
const languageName = languageDetails.getLanguageName('af');
console.log(languageName);
// Output: Afrikaans

// Check translation availability for a given language code
const translationAvailability = languageDetails.checkTranslationAvailability('af');
console.log(translationAvailability);
/_ Output:
[
{
name: 'Afrikaans',
locale: 'af-ZA',
googleTranslate: true,
microsoftTranslate: true,
deeplTranslate: false,
awsTranslate: true,
ibmTranslate: false,
awsTranscribe: false,
googleStt: false,
googleTTS: false,
awsPolly: false
}
]
_/

## Available Functions

- `isValid(langcode)`: Checks if the given language code is valid and returns the language name along with its code if valid.
- `getLanguageName(langcode)`: Retrieves the name of the language based on the provided language code.
- `checkTranslationAvailability(code)`: Checks the availability of the language across multiple translation and speech services like Google Translate, AWS Translate, etc.

## API

### isValid(languageCode)

- **Parameters**: `languageCode` (string) - The language code you want to validate.
- **Returns**: A string indicating if the language code is valid and the corresponding language name.

### getLanguageName(languageCode)

- **Parameters**: `languageCode` (string) - The language code for which you want the language name.
- **Returns**: The full name of the language if the code is valid, otherwise `null`.

### checkTranslationAvailability(code)

- **Parameters**: `code` (string) - The language code for which you want to check translation availability.
- **Returns**: An array of objects containing translation service availability information for the given language code.

## Supported Translation Services

- **Google Translate**: Simple language code compatible with Google Translate.
- **Microsoft Translator**: Language code supported by Microsoft’s translation services.
- **DeepL**: Indicates if the language is supported by DeepL.
- **AWS Translate**: Simple language code used by AWS Translate.
- **IBM Watson**: Indicates if the language is supported by IBM Watson Language Translator.
- **AWS Transcribe**: Code for AWS Transcribe speech recognition.
- **Google STT**: Code for Google Speech-to-Text.
- **Google TTS**: Code for Google Text-to-Speech.
- **AWS Polly**: Code for AWS Polly Text-to-Speech.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

If you'd like to contribute to the package, feel free to submit issues or pull requests on the GitHub repository.

## Running Tests

Make sure to write unit tests for your changes.

npm test

## License

This project is licensed under the MIT License. See the LICENSE file for details.
