import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class SlideshowSchema extends BaseSchema {
  constructor(schema?: SlideshowSchema) {
    super();
    this.id = SchemaId.Slideshow;
    this.name = "轮播图";
    this.icon = "ri:slideshow-2-line";
    this.schemaId = Symbol(SchemaId.Slideshow);
  }
}
