import { SchemaId } from "@/enums/schema";
import { createImageInfo } from "@/lib";
import { ImageInfoType } from "@/types";
import { BaseSchema, BaseStyle } from ".";

const url =
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp";

export class ImageSchema extends BaseSchema {
  public id = SchemaId.Image;
  public name = "图片";
  public icon = "clarity:image-line";
  public schemaId = Symbol(SchemaId.Image);
  public info = createImageInfo({
    url,
  });

  constructor(schema?: ImageSchema) {
    super();
    this.style = new BaseStyle({
      height: 100,
    });
  }

  setImageInfo(item: Partial<ImageInfoType>) {
    if (item.url) this.info.url = item.url;
    if (item.link) this.info.link = item.link;
  }
}
