import { SchemaId } from "@/enums/schema";
import { BaseSchema } from ".";
import { BaseSchemaApi, SchemaItemType } from "@/types";

export class TextSchema extends BaseSchema implements BaseSchemaApi {
  public text = "This is TextSchema";

  constructor(schema?: TextSchema) {
    super();
    this.id = SchemaId.Text;
    this.name = "文本";
    this.icon = "bx:text";
    this.schemaId = Symbol(SchemaId.Text);
  }

  newFunc(schema?: SchemaItemType) {
    return new TextSchema(schema as TextSchema);
  }

  setText(value: string) {
    this.text = value;
  }
}
