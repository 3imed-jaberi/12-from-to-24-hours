# 12 From To 24 Hours

[![Build Status](https://travis-ci.org/3imed-jaberi/12-from-to-24-hours.svg?branch=master)](https://travis-ci.org/3imed-jaberi/12-from-to-24-hours) &nbsp;&nbsp; [![Coverage Status](https://coveralls.io/repos/github/3imed-jaberi/12-from-to-24-hours/badge.svg?branch=master)](https://coveralls.io/github/3imed-jaberi/12-from-to-24-hours?branch=master)

### Switch between 24 and 12 hours made easy ..


## Installation 
---

- NPM :
```bash
$ npm install 12-from-to-24-hours
```

- YARN :
```bash
$ yarn add 12-from-to-24-hours
```


## Usage 
---
The method of use is simple and very easy .. Just follow these steps :

```javascript

const _12FromTo24Hours = require('12-from-to-24-hours');

// From 12 to 24 .. 
_12FromTo24Hours('8:00 PM'); // 20:00

// From 24 to 12 .. 
_12FromTo24Hours('20:00'); // 8:00 PM

```


#### License
---

[MIT](LICENSE)