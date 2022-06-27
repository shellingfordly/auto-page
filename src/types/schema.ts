import {
  ContainerSchema,
  ImageSchema,
  TextSchema,
  NoticeSchema,
  SlideshowSchema,
} from "../schemas";

export type SchemaItemType =
  | ImageSchema
  | ContainerSchema
  | TextSchema
  | NoticeSchema
  | SlideshowSchema;

export interface BorderType {
  size: number;
  style: string;
  color: string;
}
