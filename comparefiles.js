const fs = require('fs');

// Read file1 and file2
const file1 = JSON.parse(fs.readFileSync('languages.json', 'utf-8'));
const file2 = JSON.parse(fs.readFileSync('defaultLangLocales.json', 'utf-8'));

// Get locale and languageCodes from file2
const file2LocaleMap = file2.reduce((acc, item) => {
  acc[item.locale] = item.languageCodes;
  return acc;
}, {});

// Filter unmatched entries from file1
const unmatchedEntries = file1.filter(item => {
  return !(file2LocaleMap[item.locale] === item.languageCodes);
});

// Log and save unmatched entries to a new file
console.log("Unmatched entries:", unmatchedEntries);

fs.writeFileSync('unmatchedEntries.json', JSON.stringify(unmatchedEntries, null, 2), 'utf-8');
console.log('Unmatched entries have been saved to unmatchedEntries.json');
