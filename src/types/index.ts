export * from "./schema.type";
import type { ComputedRef, CSSProperties } from "vue";
export * from "./slideshow.type";
import type { Ref } from "vue";

export type CommonRef<T> = ComputedRef<T> | Ref<T>;

export type { Ref, ComputedRef, CSSProperties };

export type MaybeRef<T> = T | Ref<T>;

export type PositionType = {
  x: number;
  y: number;
};
