import { SchemaId } from "@/enums/schema";
import { BaseSchema, BaseStyle } from ".";
import { BaseSchemaApi, SchemaItemType } from "@/types";

export class TextSchema extends BaseSchema implements BaseSchemaApi {
  public text = "This is TextSchema";

  constructor(schema?: TextSchema) {
    super();
    this.id = SchemaId.Text;
    this.name = "文本";
    this.icon = "bx:text";
    this.schemaId = Symbol(SchemaId.Text);
    this.style = new BaseStyle({
      width: 100,
      height: 50,
    });
  }

  newFunc(schema?: SchemaItemType) {
    return new TextSchema(schema as TextSchema);
  }

  setText(value: string) {
    this.text = value;
  }
}
