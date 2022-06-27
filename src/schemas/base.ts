import { SchemaId } from "@/enums/schema";
import { BorderType } from "@/types";

export class BaseSchema {
  public id: SchemaId | undefined;
  public name: string | undefined;
  public icon: string | undefined;
  public schemaId: Symbol | undefined;
  public status = false;
  public selected = false;
  public link: string | undefined;
  /* style start */
  public width: string | undefined;
  public height: string | undefined;
  public margin: number | undefined;
  public padding: number | undefined;
  public border: BorderType | undefined;
  public borderRadius: number | undefined;
  /* style end */

  constructor() {}

  setSelected(bool: boolean) {
    this.selected = bool;
  }
}
