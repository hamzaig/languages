# languages

This package provides detailed information about various languages, including locale codes, simple language codes, and support across popular translation services such as Google Translate, AWS Translate, Microsoft Translator, and others.

# Language Details Package

A comprehensive npm package that provides detailed information about various languages, including their locale codes, simple language codes, and whether they are supported by popular translation services such as Google Translate, AWS Translate, Microsoft Translator, and more.

## Installation

Install the package using npm:

````bash
npm install language-details

yarn add language-details

const languageDetails = require('language-details');

// Get details for Afrikaans
const afrikaans = languageDetails.getLanguageDetails('af');
console.log(afrikaans);

/*
  {
    name: 'Afrikaans',
    languageCodes: 'af',
    locale: 'af-ZA',
    googleTranslate: 'af',
    microsoftTranslate: 'af',
    deeplTranslate: false,
    awsTranslate: 'af',
    ibmTranslate: false
  }
*/


Available Language Details
Each language object includes the following fields:

name: The full name of the language (e.g., "Afrikaans").
languageCodes: The simple ISO language code (e.g., "af").
locale: The locale code used for the language (e.g., "af-ZA").
googleTranslate: The language code supported by Google Translate.
microsoftTranslate: The language code supported by Microsoft Translator.
deeplTranslate: A boolean indicating if the language is supported by DeepL.
awsTranslate: The language code supported by AWS Translate.
ibmTranslate: A boolean indicating if the language is supported by IBM Watson Language Translator.



Here’s the README.md content you can copy and paste directly, properly formatted for Markdown:

markdown
Copy code
# Language Details Package

A comprehensive npm package that provides detailed information about various languages, including their locale codes, simple language codes, and whether they are supported by popular translation services such as Google Translate, AWS Translate, Microsoft Translator, and more.

## Installation

Install the package using npm:

```bash
npm install language-details
Or using yarn:

bash
Copy code
yarn add language-details
Usage
The package can be used to retrieve information about languages, including their simple ISO code, locale code, and compatibility with different translation services.

Example
javascript
Copy code
const languageDetails = require('language-details');

// Get details for Afrikaans
const afrikaans = languageDetails.getLanguageDetails('af');
console.log(afrikaans);

/*
  {
    name: 'Afrikaans',
    languageCodes: 'af',
    locale: 'af-ZA',
    googleTranslate: 'af',
    microsoftTranslate: 'af',
    deeplTranslate: false,
    awsTranslate: 'af',
    ibmTranslate: false
  }
*/
Available Language Details
Each language object includes the following fields:

name: The full name of the language (e.g., "Afrikaans").
languageCodes: The simple ISO language code (e.g., "af").
locale: The locale code used for the language (e.g., "af-ZA").
googleTranslate: The language code supported by Google Translate.
microsoftTranslate: The language code supported by Microsoft Translator.
deeplTranslate: A boolean indicating if the language is supported by DeepL.
awsTranslate: The language code supported by AWS Translate.
ibmTranslate: A boolean indicating if the language is supported by IBM Watson Language Translator.
API
getLanguageDetails(languageCode)
Retrieve detailed information about a language by passing its ISO code (e.g., "af" for Afrikaans).

Parameters
languageCode: A string representing the ISO language code.


{
  "name": "Language Name",
  "languageCodes": "ISO Language Code",
  "locale": "Locale Code",
  "googleTranslate": "Google Translate Code",
  "microsoftTranslate": "Microsoft Translate Code",
  "deeplTranslate": "Boolean (true or false)",
  "awsTranslate": "AWS Translate Code",
  "ibmTranslate": "Boolean (true or false)"
}



Here’s the README.md content you can copy and paste directly, properly formatted for Markdown:

markdown
Copy code
# Language Details Package

A comprehensive npm package that provides detailed information about various languages, including their locale codes, simple language codes, and whether they are supported by popular translation services such as Google Translate, AWS Translate, Microsoft Translator, and more.

## Installation

Install the package using npm:

```bash
npm install language-details
Or using yarn:

bash
Copy code
yarn add language-details
Usage
The package can be used to retrieve information about languages, including their simple ISO code, locale code, and compatibility with different translation services.

Example
javascript
Copy code
const languageDetails = require('language-details');

// Get details for Afrikaans
const afrikaans = languageDetails.getLanguageDetails('af');
console.log(afrikaans);

/*
  {
    name: 'Afrikaans',
    languageCodes: 'af',
    locale: 'af-ZA',
    googleTranslate: 'af',
    microsoftTranslate: 'af',
    deeplTranslate: false,
    awsTranslate: 'af',
    ibmTranslate: false
  }
*/
Available Language Details
Each language object includes the following fields:

name: The full name of the language (e.g., "Afrikaans").
languageCodes: The simple ISO language code (e.g., "af").
locale: The locale code used for the language (e.g., "af-ZA").
googleTranslate: The language code supported by Google Translate.
microsoftTranslate: The language code supported by Microsoft Translator.
deeplTranslate: A boolean indicating if the language is supported by DeepL.
awsTranslate: The language code supported by AWS Translate.
ibmTranslate: A boolean indicating if the language is supported by IBM Watson Language Translator.
API
getLanguageDetails(languageCode)
Retrieve detailed information about a language by passing its ISO code (e.g., "af" for Afrikaans).

Parameters
languageCode: A string representing the ISO language code.
Returns
An object with the following structure:

json
Copy code
{
  "name": "Language Name",
  "languageCodes": "ISO Language Code",
  "locale": "Locale Code",
  "googleTranslate": "Google Translate Code",
  "microsoftTranslate": "Microsoft Translate Code",
  "deeplTranslate": "Boolean (true or false)",
  "awsTranslate": "AWS Translate Code",
  "ibmTranslate": "Boolean (true or false)"
}
Supported Translation Services
Google Translate: Simple language code compatible with Google Translate.
Microsoft Translator: Language code supported by Microsoft’s translation services.
DeepL: Indicates if the language is supported by DeepL.
AWS Translate: Simple language code used by AWS Translate.
IBM Watson: Indicates if the language is supported by IBM Watson Language Translator.
Contributing
If you’d like to contribute to the package, feel free to submit issues or pull requests on the GitHub repository.

Running Tests
Make sure to write unit tests for your changes.

npm test

License
This project is licensed under the MIT License. See the LICENSE file for details.


---

You can directly copy and paste this content into your `README.md` without further formatting adjustments.


````
