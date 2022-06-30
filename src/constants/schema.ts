import {
  CarouselAnimationName,
  CarouselIndicatorPosition,
  CarouselIndicatorType,
} from "@/types";

export const IndicatorPositionMap: Record<CarouselIndicatorPosition, string> = {
  bottom: "下",
  top: "上",
  left: "左",
  right: "右",
  outer: "外",
};

export const IndicatorTypeMap: Record<CarouselIndicatorType, string> = {
  dot: "点",
  line: "线",
  slider: "块",
  never: "无",
};

export const DirectionMap = {
  horizontal: "横向",
  vertical: "竖向",
};

export const AnimationNameMap: Record<CarouselAnimationName, string> = {
  slide: "滑动",
  fade: "渐变",
  card: "卡片",
};
