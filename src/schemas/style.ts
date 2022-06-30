import type { CSSProperties } from "@/types";
import "reflect-metadata";

type TextAlignType = "left" | "right" | "center";

export interface StyleType {
  width: NullOf<number>;
  height: NullOf<number>;
  padding: NullOf<number>;
  margin: NullOf<number>;
  border: NullOf<number>;
  borderRadius: NullOf<number>;
  textAlign: TextAlignType | null;
  backgroundColor: NullOf<string>;
  position: NullOf<string>;
  zIndex: NullOf<number>;
  top: NullOf<number>;
  left: NullOf<number>;
}

export type StyleKeys = keyof StyleType;

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
  @unit("px")
  @label("宽度")
  width: NullOf<number> = null;
  @unit("px")
  @label("高度")
  height: NullOf<number> = null;
  @unit("px")
  @label("内边距")
  padding: NullOf<number> = null;
  @unit("px")
  @label("外边距")
  margin: NullOf<number> = null;
  @unit("px")
  @label("边框")
  border: NullOf<number> = null;
  @unit("px")
  @label("圆角")
  borderRadius: NullOf<number> = null;
  @unit("px")
  @label("字体大小")
  fontSize: NullOf<number> = null;
  @label("对齐方式")
  textAlign: TextAlignType | null = null;
  @label("背景色")
  backgroundColor: NullOf<string> = null;
  @label("文本颜色")
  color: NullOf<string> = null;
  @label("浮动")
  position: NullOf<string> = null;
  @label("层级")
  zIndex: NullOf<number> = null;
  @unit("px")
  @label("顶部距离")
  top: NullOf<number> = null;
  @unit("px")
  @label("左边框距离")
  left: NullOf<number> = null;

  constructor(style?: Partial<BaseStyle>) {
    style && this.initValue(style);
  }

  getStyleKeys(style: Partial<BaseStyle>) {
    return Object.keys(style) as StyleKeys[];
  }

  initValue(style: Partial<BaseStyle>) {
    this.getStyleKeys(style).forEach(
      (key) => (this[key] = style[key] as never)
    );
  }

  getStyle(style: BaseStyle) {
    return this.getStyleKeys(style).reduce((p, next) => {
      if (style[next]) {
        p[next] = style[next] + getUnit(this, next);
      }
      return p;
    }, {} as CSSProperties);
  }

  getLabel(key: StyleKeys) {
    return getLabel(this, key);
  }

  setValue(key: StyleKeys, value: ValueOf<StyleType>) {
    this[key] = value as never;
  }
}
