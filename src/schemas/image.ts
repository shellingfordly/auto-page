import { SchemaId } from "@/enums/schema";
import { createImageInfo } from "@/lib";
import type { ImageInfoType } from "@/types";
import { BaseSchema } from "./base";

export class ImageSchema extends BaseSchema {
  public contents: any[] = [];
  public info: ImageInfoType;

  constructor(schema?: ImageSchema) {
    super();
    this.id = SchemaId.Image;
    this.name = "图片";
    this.icon = "clarity:image-line";
    this.schemaId = Symbol(SchemaId.Image);
    this.info = createImageInfo({});
  }

  setImageInfo(item: Partial<ImageInfoType>) {
    if (item.url) this.info.url = item.url;
    if (item.link) this.info.link = item.link;
  }
}
