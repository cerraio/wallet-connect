import { EnabledWallet } from "../../common";
/**
 * @returns a payment address for the wallet
 */
declare const getWalletAddress: (wallet: EnabledWallet | null) => Promise<string>;
export default getWalletAddress;
