export type OneOf<T, U> = (T & { [K in keyof U]?: never }) | (U & { [K in keyof T]?: never });
