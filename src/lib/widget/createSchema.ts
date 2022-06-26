import { SchemaId } from "@/enums/schema";
import {
  ContainerSchema,
  ImageSchema,
  NoticeSchema,
  SlideshowSchema,
  TextSchema,
} from "@/schemas";
import { BaseSchema } from "@/schemas/base";

export function createSchema(schema: BaseSchema) {
  switch (schema.id) {
    case SchemaId.Image:
      return new ImageSchema(schema);
    case SchemaId.Container:
      return new ContainerSchema(schema);
    case SchemaId.Slideshow:
      return new SlideshowSchema(schema);
    case SchemaId.Notice:
      return new NoticeSchema(schema);
    case SchemaId.Text:
      return new TextSchema(schema);
    default:
      return null;
  }
}
