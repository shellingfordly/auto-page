import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class ImageSchema extends BaseSchema {
  constructor() {
    super();
    this.id = SchemaId.Image;
    this.name = "图片";
    this.schemaId = Symbol(SchemaId.Image);
  }
}