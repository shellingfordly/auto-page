import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export interface SlideshowListItem {
  url: string;
  link?: string;
}

export class SlideshowSchema extends BaseSchema {
  public list: SlideshowListItem[] = [
    {
      url: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    },
    {
      url: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    },
    {
      url: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    },
  ];

  constructor(schema?: SlideshowSchema) {
    super();
    this.id = SchemaId.Slideshow;
    this.name = "轮播图";
    this.icon = "ri:slideshow-2-line";
    this.schemaId = Symbol(SchemaId.Slideshow);
  }
}
