import { EnabledWallet } from "../../common";
/**
 * @returns a payment address for the wallet
 */
declare const getWalletChangeAddress: (wallet: EnabledWallet | null) => Promise<string>;
export default getWalletChangeAddress;
