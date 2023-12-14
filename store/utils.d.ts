import { Listener } from "./types";
export declare const makeObservable: <T>(target: T) => {
    get: () => T;
    set: (newValue: T) => void;
    subscribe: (listener: Listener<T>) => () => void;
};
/**
 * Checks for up to 5 seconds that currently stored wallet is available on the window and enabled.
 */
export declare const checkForEnabledWallet: () => Promise<boolean>;
