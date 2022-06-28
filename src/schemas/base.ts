import { SchemaId } from "@/types";
import { BaseStyle } from "./style";

export class BaseSchema {
  public id: SchemaId | undefined;
  public name: string | undefined;
  public icon: string | undefined;
  public schemaId: Symbol | undefined;
  public status = false;
  public selected = false;
  public link: string | undefined;
  public style: BaseStyle;

  constructor() {
    this.style = new BaseStyle();
  }

  setSelected(bool: boolean) {
    this.selected = bool;
  }
}
