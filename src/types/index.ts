export * from "./schema.type";
import type { CSSProperties } from "vue";
export * from "./slideshow.type";
import type { Ref } from "vue";

export type { CSSProperties };

export type MaybeRef<T> = T | Ref<T>;
