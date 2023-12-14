import { EnabledWallet } from "../../common";
/**
 * @returns ADA balance for the wallet
 */
declare const getWalletBalance: (wallet: EnabledWallet | null) => Promise<number>;
export default getWalletBalance;
