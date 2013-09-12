// adapted from: http://stackoverflow.com/questions/11233498/json-stringify-without-quotes-on-properties
function sjsonSmallify(data) {
    var json = JSON.stringify(data);
    json = json.replace(/\"([^(\")"]+)\":/g,"$1:");
    return json;
}



function sjsonParse(str) {
    var val = str.replace(/(\{|,)\s*(.+?)\s*:/g, '$1 "$2":');
    var data = JSON.parse(val);
    return data;
}



module.exports.smallify = sjsonSmallify;

module.exports.parse    = sjsonParse;