import type { SchemaId } from "@/enums/schema";
import type {
  ContainerSchema,
  ImageSchema,
  TextSchema,
  NoticeSchema,
  SlideshowSchema,
  BaseStyle,
  StyleType,
  StyleKeys,
} from "../schemas";

export type {
  ContainerSchema,
  ImageSchema,
  TextSchema,
  NoticeSchema,
  SlideshowSchema,
  SchemaId,
  BaseStyle,
  StyleType,
  StyleKeys,
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

export interface StyleEmitItem {
  key: StyleKeys;
  value: ValueOf<StyleType>;
}
