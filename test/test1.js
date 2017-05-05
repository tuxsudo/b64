import test from 'tape';
import {encode, decode} from '../src/index';


const original = {"smile": "😁"};


test('Encode/Decode', t => {

    const encoded = encode(JSON.stringify(original));
    t.ok(typeof encoded === "string", "it encodes to base64 string");

    const decoded = JSON.parse(decode(encoded));
    t.ok(original.smile === decoded.smile, `it decodes back original value ${decoded.smile}`);

    t.end();
});
