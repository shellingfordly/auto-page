import type {
  CarouselAutoPlayConfig,
  CarouselIndicatorPosition,
  CarouselIndicatorType,
} from "@arco-design/web-vue/es/carousel/interface";

export type CarouselDirection = "horizontal" | "vertical";

export type CarouselAnimationName = "slide" | "fade" | "card";

export type CarouselAutoPlayConfigKeys = KeyOf<CarouselAutoPlayConfig>;

export {
  CarouselAutoPlayConfig,
  CarouselIndicatorPosition,
  CarouselIndicatorType,
};
