# Geezer [![Build Status](https://travis-ci.org/utopiaio/Geezer.svg?branch=master)](https://travis-ci.org/utopiaio/Geezer)

Converts Arabic numerals to Geez.

### Install
`npm install geezer --save`

### Usage
```javascript
const geezer = require('geezer');

geezer(1); // '፩'
geezer('100'); // '፻'
geezer('111111'); // '፲፩፼፲፩፻፲፩'
geezer('0'); // '0'
geezer('Invalid'); // 'Invalid'
```

### Note
As with Geez, zero and decimals are not supported. If an invalid number is passed, the number itself is returned.
