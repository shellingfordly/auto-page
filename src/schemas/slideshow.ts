import { SchemaId } from "@/enums/schema";
import { createImageInfo } from "@/lib";
import type {
  ImageInfoType,
  CarouselAutoPlayConfig,
  CarouselAnimationName,
  CarouselIndicatorType,
  CarouselDirection,
  CarouselIndicatorPosition,
} from "@/types";
import { BaseSchema, BaseStyle } from ".";

export interface SlideshowConfigType {
  autoPlay: boolean | CarouselAutoPlayConfig;
  moveSpeed?: number;
  indicatorType?: CarouselIndicatorType;
  indicatorPosition?: CarouselIndicatorPosition;
  animationName?: CarouselAnimationName;
  direction?: CarouselDirection;
}

const url =
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp";
const url2 =
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp";

export class SlideshowSchema extends BaseSchema {
  public id = SchemaId.Slideshow;
  public name = "轮播图";
  public icon = "ri:slideshow-2-line";
  public schemaId = Symbol(SchemaId.Slideshow);
  public list: ImageInfoType[];
  public config: SlideshowConfigType;

  constructor(schema?: SlideshowSchema) {
    super();
    this.list = [createImageInfo({ url }), createImageInfo({ url: url2 })];
    this.style = new BaseStyle({
      height: 300,
      padding: 0,
      backgroundColor: "white",
    });
    this.config = {
      autoPlay: false,
      moveSpeed: 500,
      direction: "horizontal",
      animationName: "fade",
      indicatorType: "dot",
    };
  }

  addItem(item: Partial<ImageInfoType>) {
    this.list.push(createImageInfo(item));
  }

  removeItem(uid: Symbol) {
    this.list = this.list.filter((v) => v.uid !== uid);
  }

  updateItem(item: ImageInfoType) {
    this.list = this.list.map((v) => {
      if (v.uid === item.uid) {
        return { ...v, ...item };
      } else return v;
    });
  }

  setConfig(
    key: keyof SlideshowConfigType,
    value: ValueOf<SlideshowConfigType>
  ) {
    this.config[key] = value as never;
  }
}
