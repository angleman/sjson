// adapted from: http://stackoverflow.com/questions/11233498/json-stringify-without-quotes-on-properties
function sjsonSmallify(json) {
    var sjson = json.replace(/\"([^(\")"]+)\":/g,"$1:");
    return sjson;
}



function sjsonParse(sjson) {
    var json = sjson.replace(/(\{|,)\s*(.+?)\s*:/g, '$1"$2":');
    return json;
}



module.exports.squish = sjsonSmallify;

module.exports.parse  = sjsonParse;