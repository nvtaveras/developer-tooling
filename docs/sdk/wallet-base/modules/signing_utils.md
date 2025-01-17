[@celo/wallet-base](../README.md) / signing-utils

# Module: signing-utils

## Table of contents

### Interfaces

- [LegacyEncodedTx](../interfaces/signing_utils.LegacyEncodedTx.md)

### Variables

- [publicKeyPrefix](signing_utils.md#publickeyprefix)
- [sixtyFour](signing_utils.md#sixtyfour)
- [thirtyTwo](signing_utils.md#thirtytwo)

### Functions

- [assertLength](signing_utils.md#assertlength)
- [chainIdTransformationForSigning](signing_utils.md#chainidtransformationforsigning)
- [decodeSig](signing_utils.md#decodesig)
- [determineTXType](signing_utils.md#determinetxtype)
- [encodeTransaction](signing_utils.md#encodetransaction)
- [encode\_deprecated\_celo\_legacy\_type\_only\_for\_temporary\_ledger\_compat](signing_utils.md#encode_deprecated_celo_legacy_type_only_for_temporary_ledger_compat)
- [extractPublicKeyFromHashAndSignature](signing_utils.md#extractpublickeyfromhashandsignature)
- [extractSignature](signing_utils.md#extractsignature)
- [getHashFromEncoded](signing_utils.md#gethashfromencoded)
- [getSignerFromTxEIP2718TX](signing_utils.md#getsignerfromtxeip2718tx)
- [handleBigInt](signing_utils.md#handlebigint)
- [handleData](signing_utils.md#handledata)
- [handleHexString](signing_utils.md#handlehexstring)
- [handleNumber](signing_utils.md#handlenumber)
- [handleStringNumber](signing_utils.md#handlestringnumber)
- [isCIP64](signing_utils.md#iscip64)
- [isCIP66](signing_utils.md#iscip66)
- [isEIP1559](signing_utils.md#iseip1559)
- [isPriceToLow](signing_utils.md#ispricetolow)
- [recoverMessageSigner](signing_utils.md#recovermessagesigner)
- [recoverTransaction](signing_utils.md#recovertransaction)
- [rlpEncodedTx](signing_utils.md#rlpencodedtx)
- [signTransaction](signing_utils.md#signtransaction)
- [stringNumberOrBNToHex](signing_utils.md#stringnumberorbntohex)
- [verifyEIP712TypedDataSigner](signing_utils.md#verifyeip712typeddatasigner)
- [verifySignatureWithoutPrefix](signing_utils.md#verifysignaturewithoutprefix)

## Variables

### publicKeyPrefix

• `Const` **publicKeyPrefix**: `number` = `0x04`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:48](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L48)

___

### sixtyFour

• `Const` **sixtyFour**: `number` = `64`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:49](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L49)

___

### thirtyTwo

• `Const` **thirtyTwo**: `number` = `32`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:50](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L50)

## Functions

### assertLength

▸ **assertLength**(`transactionArray`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionArray` | `Uint8Array` \| `NestedUint8Array` |
| `type` | `TransactionTypes` |

#### Returns

`void`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:946](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L946)

___

### chainIdTransformationForSigning

▸ **chainIdTransformationForSigning**(`chainId`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`number`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:64](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L64)

___

### decodeSig

▸ **decodeSig**(`sig`, `addToV?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sig` | \`0x$\{string}\` \| `RecoveredSignatureType` | `undefined` |
| `addToV` | `number` | `0` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `r` | `Buffer` |
| `s` | `Buffer` |
| `v` | `number` |

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:880](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L880)

___

### determineTXType

▸ **determineTXType**(`serializedTransaction`): `OldTransactionTypes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedTransaction` | `string` |

#### Returns

`OldTransactionTypes`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:553](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L553)

___

### encodeTransaction

▸ **encodeTransaction**(`rlpEncoded`, `signature`): `Promise`\<`EncodedTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rlpEncoded` | `RLPEncodedTx` \| [`LegacyEncodedTx`](../interfaces/signing_utils.LegacyEncodedTx.md) |
| `signature` | `Object` |
| `signature.r` | `Buffer` |
| `signature.s` | `Buffer` |
| `signature.v` | `number` \| `bigint` |

#### Returns

`Promise`\<`EncodedTransaction`\>

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:376](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L376)

___

### encode\_deprecated\_celo\_legacy\_type\_only\_for\_temporary\_ledger\_compat

▸ **encode_deprecated_celo_legacy_type_only_for_temporary_ledger_compat**(`tx`): [`LegacyEncodedTx`](../interfaces/signing_utils.LegacyEncodedTx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `CeloTx` |

#### Returns

[`LegacyEncodedTx`](../interfaces/signing_utils.LegacyEncodedTx.md)

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:245](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L245)

___

### extractPublicKeyFromHashAndSignature

▸ **extractPublicKeyFromHashAndSignature**(`«destructured»`, `data`, `_prefix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `r` | `string` |
| › `s` | `string` |
| › `v` | `number` |
| › `yParity` | ``0`` \| ``1`` |
| `data` | `Uint8Array` \| `NestedUint8Array` |
| `_prefix` | `TxTypeToPrefix` |

#### Returns

`string`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:890](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L890)

___

### extractSignature

▸ **extractSignature**(`rawTx`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawTx` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `r` | \`0x$\{string}\` |
| `s` | \`0x$\{string}\` |
| `v` | \`0x$\{string}\` |

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:471](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L471)

___

### getHashFromEncoded

▸ **getHashFromEncoded**(`rlpEncode`): `StrongAddress`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rlpEncode` | \`0x$\{string}\` |

#### Returns

`StrongAddress`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:68](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L68)

___

### getSignerFromTxEIP2718TX

▸ **getSignerFromTxEIP2718TX**(`serializedTransaction`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedTransaction` | `string` |

#### Returns

`string`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:543](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L543)

___

### handleBigInt

▸ **handleBigInt**(`n`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `Uint8Array` |

#### Returns

`bigint`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:924](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L924)

___

### handleData

▸ **handleData**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:938](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L938)

___

### handleHexString

▸ **handleHexString**(`adr`): `StrongAddress`

#### Parameters

| Name | Type |
| :------ | :------ |
| `adr` | `Uint8Array` |

#### Returns

`StrongAddress`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:930](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L930)

___

### handleNumber

▸ **handleNumber**(`n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `Uint8Array` |

#### Returns

`number`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:912](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L912)

___

### handleStringNumber

▸ **handleStringNumber**(`n`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:918](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L918)

___

### isCIP64

▸ **isCIP64**(`tx`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `CeloTx` |

#### Returns

`boolean`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:355](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L355)

___

### isCIP66

▸ **isCIP66**(`tx`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `CeloTx` |

#### Returns

`boolean`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:351](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L351)

___

### isEIP1559

▸ **isEIP1559**(`tx`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `CeloTx` |

#### Returns

`boolean`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:347](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L347)

___

### isPriceToLow

▸ **isPriceToLow**(`tx`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `CeloTx` |

#### Returns

`boolean`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:333](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L333)

___

### recoverMessageSigner

▸ **recoverMessageSigner**(`signingDataHex`, `signedData`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signingDataHex` | `string` |
| `signedData` | `string` |

#### Returns

`string`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:848](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L848)

___

### recoverTransaction

▸ **recoverTransaction**(`rawTx`): [`CeloTx`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawTx` | `string` |

#### Returns

[`CeloTx`, `string`]

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:502](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L502)

___

### rlpEncodedTx

▸ **rlpEncodedTx**(`tx`): `RLPEncodedTx`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `CeloTx` |

#### Returns

`RLPEncodedTx`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:134](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L134)

___

### signTransaction

▸ **signTransaction**(`hash`, `privateKey`, `addToV?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hash` | \`0x$\{string}\` | `undefined` |
| `privateKey` | \`0x$\{string}\` | `undefined` |
| `addToV` | `number` | `0` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `r` | `Buffer` |
| `s` | `Buffer` |
| `v` | `number` |

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:903](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L903)

___

### stringNumberOrBNToHex

▸ **stringNumberOrBNToHex**(`num?`): `Hex`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num?` | `string` \| `number` \| `bigint` \| `BN` |

#### Returns

`Hex`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:115](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L115)

___

### verifyEIP712TypedDataSigner

▸ **verifyEIP712TypedDataSigner**(`typedData`, `signedData`, `expectedAddress`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `typedData` | `EIP712TypedData` |
| `signedData` | `string` |
| `expectedAddress` | `string` |

#### Returns

`boolean`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:858](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L858)

___

### verifySignatureWithoutPrefix

▸ **verifySignatureWithoutPrefix**(`messageHash`, `signature`, `signer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageHash` | `string` |
| `signature` | `string` |
| `signer` | `string` |

#### Returns

`boolean`

#### Defined in

[wallets/wallet-base/src/signing-utils.ts:867](https://github.com/celo-org/developer-tooling/blob/master/packages/sdk/wallets/wallet-base/src/signing-utils.ts#L867)
