type BufferEncodingType = 'hex' | 'utf8' | 'ascii' | 'binary' | 'base64' | 'ucs2' | 'utf16le';
type Encoding = BufferEncodingType | 'json' | 'utf-8' | 'ucs-2';
interface Codec {
    encode: (data: any) => any;
    decode: (buffer: any) => any;
    buffer: boolean;
    name: Encoding;
}
declare const codecs: Record<Encoding, Codec>;
export default codecs;
//# sourceMappingURL=codecs.d.ts.map