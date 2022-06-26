import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class SlideshowSchema extends BaseSchema {
  constructor(schema?: SlideshowSchema) {
    super();
    this.id = SchemaId.Slideshow;
    this.name = "轮播图";
    this.schemaId = Symbol(SchemaId.Slideshow);
  }
}
