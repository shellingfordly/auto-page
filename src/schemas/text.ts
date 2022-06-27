import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class TextSchema extends BaseSchema {
  public text = "This is TextSchema";

  constructor(schema?: TextSchema) {
    super();
    this.id = SchemaId.Text;
    this.name = "文本";
    this.icon = "bx:text";
    this.schemaId = Symbol(SchemaId.Text);
    this.updateBaseStyle({
      textAlign: "center",
    });
  }

  setText(value: string) {
    this.text = value;
  }
}
