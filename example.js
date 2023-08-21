import codec from './dist/codec.js';

const test = codec.json.encode({ hello: 'world' });

console.log(test);

