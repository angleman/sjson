// test/main.js
var should = require('should');

describe('package', function() {
    describe('should', function() {
    	var data = {first:"joe", last:"smith", age:27};
    	var json  = JSON.stringify(data);
    	var squished = '{first:"joe",last:"smith",age:27}';
    	var SJSON, sjson, json2;
    	it('load', function() {
	        SJSON = require('../index.js');
        });

    	it('squish to: ' + squished, function() {
			sjson = SJSON.squish(json);
			should.exist(sjson);
			sjson.should.equal(squished);
        });

    	it('unsquish back to: ' + json, function() {
			json2 = SJSON.unsquish(sjson);
			should.exist(json2);
			json2.should.equal(json);
        });
    });
});
