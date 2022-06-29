import { SchemaId, SchemaItemType } from "@/types";
import { BaseStyle } from ".";

export interface BaseSchemaApi {
  id: SchemaId | undefined;
  name: string | undefined;
  icon: string | undefined;
  schemaId: Symbol | undefined;
  status: boolean;
  link: string | undefined;
  style: BaseStyle;
  newFunc: (schema?: SchemaItemType) => SchemaItemType;
}

export class BaseSchema implements BaseSchemaApi {
  public id: SchemaId | undefined;
  public name: string | undefined;
  public icon: string | undefined;
  public schemaId: Symbol | undefined;
  public status = false;
  public link: string | undefined;
  public style: BaseStyle;

  constructor() {
    this.style = new BaseStyle();
  }

  get getStyle() {
    return this.style.getStyle(this.style);
  }

  newFunc(schema?: SchemaItemType) {
    const Constructor: any = this.constructor;
    return new Constructor(schema);
  }

  setValue(key: keyof BaseSchemaApi, value: ValueOf<BaseSchemaApi>) {
    this[key] = value as never;
  }
}
