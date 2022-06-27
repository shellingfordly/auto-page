import type { SchemaId, CSSProperties } from "@/types";

export class BaseSchema {
  public id: SchemaId | undefined;
  public name: string | undefined;
  public icon: string | undefined;
  public schemaId: Symbol | undefined;
  public status = false;
  public selected = false;
  public link: string | undefined;
  public style: CSSProperties;

  constructor() {
    this.style = this.createBaseStyle();
  }

  setSelected(bool: boolean) {
    this.selected = bool;
  }

  private createBaseStyle(): CSSProperties {
    return {
      width: "100%",
      height: "",
      margin: 0,
      padding: 0,
      border: 0,
      borderRadius: 0,
    };
  }

  updateBaseStyle(style: CSSProperties) {
    Object.assign(this.style, style);
  }
}
