import codecs from './codecs.js';
describe('codecs', () => {
    it('should correctly encode and decode utf8', () => {
        const data = 'Hello, World!';
        const encoded = codecs.utf8.encode(data);
        const decoded = codecs.utf8.decode(encoded);
        expect(decoded).toEqual(data);
    });
    it('should correctly encode and decode json', () => {
        const data = { greeting: 'Hello, World!' };
        const encoded = codecs.json.encode(data);
        const decoded = codecs.json.decode(encoded);
        expect(decoded).toEqual(data);
    });
});
//# sourceMappingURL=codec.test.js.map