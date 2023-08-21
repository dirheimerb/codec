# Encoding Codec Utility

Hello! This is a utility crafted to facilitate encoding and decoding data using various formats, including but not limited to `hex`, `utf8`, `ascii`, and `json`.

## Table of Contents

- [Encoding Codec Utility](#encoding-codec-utility)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contributions](#contributions)

## Overview

The utility is built around the concept of a `Codec` which can encode and decode data. It has a record of codecs mapped to different encodings. This utility conveniently provides codecs for multiple encoding types and even includes a JSON codec.

## Features

- **Buffer Encoding Types**: The primary encodings supported are `hex`, `utf8`, `ascii`, `binary`, `base64`, `ucs2`, and `utf16le`.
  
- **Additional Encodings**: Added support for `json`, `utf-8`, and `ucs-2` encodings.

- **Extensible**: While a set of common encodings are pre-defined, the architecture allows you to seamlessly integrate more if needed.

## Installation

(Please include any installation steps if this utility is to be packaged and distributed.)

## Usage

Here's a basic usage example:

```typescript
import codec from './dist/codec.js';

const data = 'Hello, World!';
const encoded = codecs.utf8.encode(data);
const decoded = codecs.utf8.decode(encoded);
console.log(decoded);  // Outputs: Hello, Brad!
```

## Testing

The utility comes with a test suite to ensure that encoding and decoding work correctly. If you're extending the utility or just wish to run tests:

```bash
jest codec.test.ts
```

## Contributions

Open to improvements and additional features! If you think something's missing or needs refinement, please feel free to contribute.
