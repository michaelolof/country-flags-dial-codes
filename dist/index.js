const countryListMap = require("./countries-codes-flags.json");

export function getCountryListMap() {
  return countryListMap;
}

export function getCountryDialCode(countryCode) {
  const country = countryListMap[ countryCode ];
  return country && country.dialCode;
}

export function getCountryName(countryCode) {
  const country = countryListMap[ countryCode ];
  return country && country.country;
}

export function getCountryFlag(countryCode) {
  const country = countryListMap[ countryCode ];
  return country && country.flag;
}