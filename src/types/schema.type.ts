import { STYLE_MAP } from "@/constants";
import type { SchemaId } from "@/enums/schema";
import type {
  ContainerSchema,
  ImageSchema,
  TextSchema,
  NoticeSchema,
  SlideshowSchema,
  BaseStyle,
  StyleType,
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
};

export interface BaseSchemaApi {
  id: SchemaId | undefined;
  name: string | undefined;
  icon: string | undefined;
  schemaId: Symbol | undefined;
  status: boolean;
  selected: boolean;
  link: string | undefined;
  style: StyleType;
  newFunc: (schema?: SchemaItemType) => SchemaItemType;
}

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

export type StyleKeys = keyof BaseStyle;

export interface StyleEmitItem {
  key: StyleKeys;
  value: ValueOf<StyleType>;
}
