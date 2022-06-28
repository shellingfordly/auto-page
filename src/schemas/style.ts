import type { CSSProperties, StyleKeys } from "@/types";
import "reflect-metadata";

type TextAlignType = "left" | "right" | "center";

export interface StyleType {
  width?: number;
  height?: number;
  padding?: number;
  margin?: number;
  border?: number;
  borderRadius?: number;
  textAlign?: TextAlignType;
  backgroundColor?: string;
}

const LabelKey = Symbol("label");
const UnitKey = Symbol("label");

export function unit(value: string) {
  return Reflect.metadata(UnitKey, value);
}

export function getUnit(target: any, propertyKey: StyleKeys) {
  return Reflect.getMetadata(UnitKey, target, propertyKey) || "";
}

export function label(value: string) {
  return Reflect.metadata(LabelKey, value);
}

export function getLabel(target: any, propertyKey: StyleKeys) {
  return Reflect.getMetadata(LabelKey, target, propertyKey) || "";
}

export class BaseStyle implements StyleType {
  @unit("%")
  @label("宽度")
  width = 100;
  @unit("px")
  @label("高度")
  height?: number;
  @unit("px")
  @label("内边距")
  padding?: number;
  @unit("px")
  @label("外边距")
  margin?: number;
  @unit("px")
  @label("边框")
  border?: number;
  @unit("px")
  @label("圆角")
  borderRadius?: number;
  @unit("px")
  @label("字体大小")
  fontSize?: number;
  @label("对齐方式")
  textAlign?: TextAlignType;
  @label("背景色")
  backgroundColor?: string;

  constructor(style?: Partial<BaseStyle>) {
    if (style) {
      this.setStyleValue(style);
    }
  }

  setStyleValue(style: Partial<BaseStyle>) {
    (Object.keys(style) as StyleKeys[]).forEach((key) => {
      (this as any)[key] = style[key];
    });
  }

  getStyle(style: BaseStyle) {
    const result: any = {};
    Object.keys(style).forEach((key) => {
      const _key = key as StyleKeys;
      const value = style[_key];
      if (value) {
        result[_key] = value + getUnit(this, _key);
      }
    });
    return result as CSSProperties;
  }

  getLabel(key: StyleKeys) {
    return getLabel(this, key);
  }

  setValue(key: StyleKeys, value: UndOf<StrOrNum>) {
    (this as any)[key] = value;
  }
}
