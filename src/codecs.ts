type BufferEncodingType = 'hex' | 'utf8' | 'ascii' | 'binary' | 'base64' | 'ucs2' | 'utf16le';
type Encoding = BufferEncodingType | 'json' | 'utf-8' | 'ucs-2';
interface Codec {
    encode: (data: any) => any;
    decode: (buffer: any) => any;
    buffer: boolean;
    name: Encoding;
};

const primaryEncodings: BufferEncodingType[] = ['hex', 'utf8', 'ascii', 'binary', 'base64', 'ucs2', 'utf16le'];

const codecs: Record<Encoding, Codec> = {} as Record<Encoding, Codec>;

primaryEncodings.forEach((encoding) => {
    codecs[encoding as Encoding] = {
        encode: function (data: any) {
            return Buffer.from(data, encoding);
        },
        decode: function (buffer: Buffer) {
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
