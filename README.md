# Geezer

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

### Notes
As with Geez numbers zero and decimal numbers are not supported. If an invalid number is passed, the number itself is returned.
