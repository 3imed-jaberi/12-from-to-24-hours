# 12 From To 24 Hours

[![Build Status](https://travis-ci.org/3imed-jaberi/12-from-to-24-hours.svg?branch=master)](https://travis-ci.org/3imed-jaberi/12-from-to-24-hours)

> Coverage 100%

### Easy and tiny way to switch between 24 and 12 hours systems.

## Installation

- Npm :

```bash
$ npm install 12fromto24hours
```

- Yarn :

```bash
$ yarn add 12fromto24hours
```

## Usage

The method of use is simple and very easy .. Just follow these steps :

```javascript
const _12FromTo24Hours = require("12fromto24hours");

// From 12 to 24 ..
_12FromTo24Hours("8:00 PM"); // 20:00

// From 24 to 12 ..
_12FromTo24Hours("20:00"); // 8:00 PM
```

#### License

[MIT](LICENSE)
