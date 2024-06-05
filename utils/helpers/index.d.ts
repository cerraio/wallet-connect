import { Buffer } from "buffer";
export declare const addressFromHex: (hex: string) => string;
export declare const fromHex: (hex: string) => Buffer;
/**
 * References localStorage to get stored wallet key with a check to
 * avoid Next.js server-side error where window is not defined.
 *
 * @returns the stored wallet key string or null
 */
export declare const getInitialWalletName: () => string | null;
