import { WalletInfo } from "../../common";
/**
 * @returns a list of Cardano wallets for the current device and
 * browser. Installed wallets appear before uninstalled wallets.
 */
declare const getSupportedWallets: () => ReadonlyArray<WalletInfo>;
export default getSupportedWallets;
