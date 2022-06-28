import { StyleKeys } from "@/types";
import "reflect-metadata";

type TextAlignType = "left" | "right" | "center";

export interface StyleType {
  width: number;
  height: number;
  padding: number;
  margin: number;
  border: number;
  borderRadius: number;
  textAlign: TextAlignType;
}

const formatMetadataKey = Symbol("label");

function label(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}

export function getLabel(target: any, propertyKey: StyleKeys) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

export class BaseStyle implements StyleType {
  @label("宽度")
  width = 0;
  @label("高度")
  height = 0;
  @label("内边距")
  padding = 0;
  @label("外边距")
  margin = 0;
  @label("边框")
  border = 0;
  @label("圆角")
  borderRadius = 0;
  @label("对齐方式")
  textAlign: TextAlignType = "center";

  constructor(style?: BaseStyle) {
    if (style) {
      this.initStyleValue(style);
    }
  }

  private initStyleValue(style: BaseStyle) {
    (Object.keys(style) as StyleKeys[]).forEach((key) => {
      (this as any)[key] = style[key];
    });
  }

  getLabel(key: StyleKeys) {
    return getLabel(this, key);
  }

  setValue(key: StyleKeys, value: UndOf<StrOrNum>) {
    console.log("key", key, value);

    (this as any)[key] = value;
  }
}
