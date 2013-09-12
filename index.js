// adapted from: http://stackoverflow.com/questions/11233498/json-stringify-without-quotes-on-properties
function squish(json) {
    var sjson = json.replace(/\"([^(\")"]+)\":/g,"$1:");
    return sjson;
}



function unsquish(sjson) {
    var json = sjson.replace(/(\{|,)\s*(.+?)\s*:/g, '$1"$2":');
    return json;
}


function squishify(obj) {
	var json = JSON.stringify(obj);
	return squish(json);
}


function parse(sjson) {
	var json = unsquish(sjson);
	return JSON.parse(json);
}


function callbackify(obj, callback_name) {
	callback_name = callback_name || 'callback';
	return = callback + '(' + squishify(obj) + ');'
}


module.exports.squish      = squish;
module.exports.unsquish    = unsquish;
module.exports.squishify   = squishify;
module.exports.parse       = parse;
module.exports.callbackify = callbackify;
