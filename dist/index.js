const countryListMap = require("./countries-codes-flags.json");

module.exports.getCountryListMap = function() {
  return countryListMap;
}

module.exports.getCountryDialCode = function(countryCode) {
  const country = countryListMap[ countryCode ];
  return country && country.dialCode;
}

module.exports.getCountryName = function(countryCode) {
  const country = countryListMap[ countryCode ];
  return country && country.country;
}

module.exports.getCountryFlag = function(countryCode) {
  const country = countryListMap[ countryCode ];
  return country && country.flag;
}