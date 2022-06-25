import { SchemaId } from "@/enums/schema";

export class BaseSchema {
  public id: SchemaId | undefined;
  public name: string | undefined;
  public icon: string | undefined;
  public schemaId: Symbol | undefined;
  public status = false;
  public selected = false;

  constructor() {}

  setSelected(bool: boolean) {
    this.selected = bool;
  }
}
