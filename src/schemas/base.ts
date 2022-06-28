import { SchemaId } from "@/types";
import { BaseStyle } from ".";

export class BaseSchema {
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
}
