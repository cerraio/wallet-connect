import { EnabledWallet } from "../common";
export declare type Listener<T> = (value: T) => void;
export interface State {
    readonly isLoading: boolean;
    readonly error: string | null;
    readonly enabledWallet: EnabledWallet | null;
    readonly isConnected: boolean;
}
