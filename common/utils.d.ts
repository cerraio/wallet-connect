/**
 * Calls an async function with a timeout that throws a catchable error
 * if the function doesn't resolve in time.
 *
 * @param fn asynchronous function to call
 * @param errorMessage error message to display if call takes longer than time limit
 * @param ms number of milliseconds before timeout error is thrown
 * @returns value returned by fn argument
 */
export declare const asyncTimeout: <T>(fn: () => Promise<T>, errorMessage: string, ms?: number) => Promise<T>;
