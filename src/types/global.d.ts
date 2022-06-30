declare type StrOrNum = string | number;

declare type KeyOf<T = any> = keyof T;
declare type ConstKeyOf<T = any> = KeyOf<typeof T>;

declare type ValueOf<T = any> = T[keyof T];
declare type ConstValueOf<T = any> = ValueOf<typeof T>;
declare type RecordConstValueOf<K = any, V = any> = Record<ConstValueOf<K>, V>;

declare type UndOf<T> = T | undefined;
declare type NullOf<T> = T | null;
