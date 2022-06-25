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
