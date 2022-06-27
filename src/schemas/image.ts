import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class ImageSchema extends BaseSchema {
  constructor(schema?: ImageSchema) {
    super();
    this.id = SchemaId.Image;
    this.name = "图片";
    this.icon = "clarity:image-line";
    this.schemaId = Symbol(SchemaId.Image);
  }
}
