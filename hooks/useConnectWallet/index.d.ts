import { UseConnectWalletResult } from "./types";
/**
 * Returns values and helper functions for connecting, utlizing,
 * and enabling a Cardano wallet. Wallet state is shared throughout
 * all hook references.
 */
declare const useConnectWallet: () => UseConnectWalletResult;
export default useConnectWallet;
