import { SchemaId } from "@/enums/schema";
import { createImageInfo } from "@/lib";
import type { ImageInfoType, BaseSchemaApi, SchemaItemType } from "@/types";
import { BaseSchema } from "./base";

const url =
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp";

export class SlideshowSchema extends BaseSchema implements BaseSchemaApi {
  public list: ImageInfoType[] = [
    createImageInfo({ url }),
    createImageInfo({ url }),
  ];

  constructor(schema?: SlideshowSchema) {
    super();
    this.id = SchemaId.Slideshow;
    this.name = "轮播图";
    this.icon = "ri:slideshow-2-line";
    this.schemaId = Symbol(SchemaId.Slideshow);
  }

  newFunc(schema?: SchemaItemType) {
    return new SlideshowSchema(schema as SlideshowSchema);
  }

  addSlideshowItem(item: Partial<ImageInfoType>) {
    this.list.push(createImageInfo(item));
  }

  removeSlideshowItem(uid: Symbol) {
    this.list = this.list.filter((v) => v.uid !== uid);
  }

  updateSlideshowItem(item: ImageInfoType) {
    const index = this.list.findIndex((v) => v.uid === item.uid);
    this.list.splice(index, 1, { ...this.list[index], ...item });
  }
}
