# TOC
   - [package](#package)
<a name=""></a>
 
<a name="package"></a>
# package
<a name="package-should"></a>
## should
load.

```js
SJSON = require('../index.js');
```

squish to: {first:"joe",last:"smith",age:27}.

```js
sjson = SJSON.squish(json);
should.exist(sjson);
sjson.should.equal(squished);
```

parse back to: {"first":"joe","last":"smith","age":27}.

```js
json2 = SJSON.parse(sjson);
should.exist(json2);
json2.should.equal(json);
```

