import { PublicKey } from '@near-js/crypto';
import BN from 'bn.js';

import { Action } from './actions';
import { Transaction } from './schema';

/**
 * Creates a new transaction object with the provided parameters.
 * @param signerId The NEAR account ID of the transaction signer.
 * @param publicKey The public key associated with the signer.
 * @param receiverId The NEAR account ID of the transaction receiver.
 * @param nonce The nonce value for the transaction, represented as a BN, string, or number.
 * @param actions An array of transaction actions to be performed.
 * @param blockHash The hash of the block where the transaction will be included.
 * @returns A new transaction object initialized with the provided parameters.
 */
export function createTransaction(signerId: string, publicKey: PublicKey, receiverId: string, nonce: BN | string | number, actions: Action[], blockHash: Uint8Array): Transaction {
    return new Transaction({ signerId, publicKey, nonce: new BN(nonce), receiverId, actions, blockHash });
}
