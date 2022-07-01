import { SchemaId } from "@/enums/schema";
import { BaseSchema, BaseStyle } from ".";

export class TextSchema extends BaseSchema {
  public id = SchemaId.Text;
  public name = "文本";
  public icon = "bx:text";
  public schemaId = Symbol(SchemaId.Text);
  public text = "This is TextSchema";
  public style = new BaseStyle({
    color: "white",
    textAlign: "center",
    backgroundColor: "",
    padding: 0,
    margin: 0,
    fontSize: 14,
  });

  constructor(schema?: TextSchema) {
    super();
  }

  setText(value: string) {
    this.text = value;
  }
}
