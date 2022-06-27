import { SchemaId } from "@/enums/schema";
import {
  ContainerSchema,
  ImageSchema,
  NoticeSchema,
  SlideshowSchema,
  TextSchema,
} from "@/schemas";
import { SchemaItemType } from "@/types";

export function createSchema(schema: SchemaItemType) {
  switch (schema.id) {
    case SchemaId.Image:
      return new ImageSchema(schema as ImageSchema);
    case SchemaId.Container:
      return new ContainerSchema(schema as ContainerSchema);
    case SchemaId.Slideshow:
      return new SlideshowSchema(schema as SlideshowSchema);
    case SchemaId.Notice:
      return new NoticeSchema(schema as NoticeSchema);
    case SchemaId.Text:
      return new TextSchema(schema as TextSchema);
    default:
      return null;
  }
}
