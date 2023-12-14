import { EnabledWallet } from "../../common";
/**
 * Signs a transaction and returns the entire transaction as a CBOR encoded hex string.
 *
 * @param wallet the enabled wallet API
 * @param tx cbor hex encoded transaction string
 * @returns the full signed transaction as a CBOR encoded hex string
 */
declare const signWalletTransaction: (wallet: EnabledWallet | null, tx: string) => Promise<string>;
export default signWalletTransaction;
