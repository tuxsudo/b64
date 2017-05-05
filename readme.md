# Base64, Unicode-Compatible Encoding & Decoding

Works with Browser and Node. Can be encoded in node, shipped to browser, decoded there.


## Install

```
npm i -S @tuxsudo/b64
```


## Usage

```
import {encode, decode} from '@tuxsudo/b64';

const encoded = encode(JSON.stringify({"smile": "😁"}));
const decoded = decode(encoded);
```
