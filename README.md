# sjson [![NPM version](https://badge.fury.io/js/sjson.png?branch=master)](https://npmjs.org/package/sjson) [![Build Status](https://travis-ci.org/angleman/sjson.png?branch=master)](https://travis-ci.org/angleman/sjson) [![Dependency Status](https://gemnasium.com/angleman/sjson.png?branch=master)](https://gemnasium.com/angleman/sjson) [![License](http://badgr.co/use/MIT.png?bg=%2343d100)](http://opensource.org/licenses/MIT)

Squish and unsquish JSON strings. To assist with JSON string compression by stripping variable name double quotes. It assists with gzip compression and still enables the strings to be parsed by javascript.

## Install

```
npm install sjson
```

## Usage

```
var SJSON = require('sjson');

var data = {first:"joe", last:"smith", age:27};
var json  = JSON.stringify(data);
var sjson = SJSON.squish(json);
var json2 = SJSON.parse(sjson);
var data2 = JSON.parse(json2);

console.log(data);   // {"first": "joe", "last": "smith", "age": 27}
console.log(json);   // {"first":"joe","last":"smith","age":27}
console.log(sjson);  // {first:"joe",last:"smith",age:27}
console.log(json2);  // {"first":"joe","last":"smith","age":27}
console.log(data2);  // {"first": "joe", "last": "smith", "age": 27}
```

While it may not look like much, every byte helps when you scale :-) In this example we get at 15% headstart on any addition compression we may want to do.

## Credits

[Derek](http://stackoverflow.com/questions/11233498/json-stringify-without-quotes-on-properties) and [Bergi](http://stackoverflow.com/questions/11233498/json-stringify-without-quotes-on-properties)

## License: MIT

