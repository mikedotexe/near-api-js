import type { KeyPairString } from './types.js';
import { PublicKey } from './public_key.js';

export interface ISignatureCrypto {
    signature: Uint8Array;
    publicKey: PublicKey;
}

export abstract class KeyPairBase {
    abstract sign(message: Uint8Array): ISignatureCrypto;
    abstract verify(message: Uint8Array, signature: Uint8Array): boolean;
    abstract toString(): KeyPairString;
    abstract getPublicKey(): PublicKey;
}
