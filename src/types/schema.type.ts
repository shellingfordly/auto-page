import { STYLE_MAP } from "@/constants";
import type { SchemaId } from "@/enums/schema";
import type { CSSProperties } from ".";
import type {
  ContainerSchema,
  ImageSchema,
  TextSchema,
  NoticeSchema,
  SlideshowSchema,
} from "../schemas";

export type {
  ContainerSchema,
  ImageSchema,
  TextSchema,
  NoticeSchema,
  SlideshowSchema,
  SchemaId,
};

export type SchemaItemType =
  | ImageSchema
  | ContainerSchema
  | TextSchema
  | NoticeSchema
  | SlideshowSchema;

export interface BorderType {
  size?: number;
  style?: string;
  color?: string;
}

export interface ImageInfoType {
  uid: Symbol;
  url: string;
  link?: string;
}

export type StyleKeys = keyof CSSProperties;

export interface StyleListItem {
  label: ValueOf<typeof STYLE_MAP>;
  value: StyleKeys;
}
