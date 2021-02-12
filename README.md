# Countries Flag Dial Codes

A Utility library for mapping countries, dial codes and their flags in SVG.


## Installation
```sh
$ npm install --save country-flags-dial-code
```
<br>

## API
### getCountryListMap()
```ts
/**
 * Returns a dictionary of countries with their flags, name and codes (E.g)
 * {
 *    "AC": {
 *      "flag": "<svg xmlns='http:/>..."
 *      "code": "AC",
 *      "country": "Ascension Island",
 *      "dialCode": "+247"
 *    }
 *    ...
 * }
```
<br>

### getCountryDialCode(countryCode)
```ts
/**
 * Returns the dial code for a given country (E.g)
 * "+247"
```
<br>

### getCountryName(countryCode)
```ts
/**
 * Returns the dial code for a given country (E.g)
 * "Ascension Island"
```
<br>

### getCountryFlag(countryCode)
```ts
/**
 * Returns the dial code for a given country (E.g)
 * "<svg xmlns='http:/>..."
```