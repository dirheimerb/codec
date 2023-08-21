;
const primaryEncodings = ['hex', 'utf8', 'ascii', 'binary', 'base64', 'ucs2', 'utf16le'];
const codecs = {};
primaryEncodings.forEach((encoding) => {
    codecs[encoding] = {
        encode: function (data) {
            return Buffer.from(data, encoding);
        },
        decode: function (buffer) {
            return buffer.toString(encoding);
        },
        buffer: true,
        name: encoding
    };
});
codecs.json = {
    encode: JSON.stringify,
    decode: JSON.parse,
    buffer: false,
    name: 'json'
};
// Map the hyphenated versions to their non-hyphenated counterparts
codecs['utf-8'] = codecs.utf8;
codecs['ucs-2'] = codecs.ucs2;
export default codecs;
//# sourceMappingURL=codecs.js.map