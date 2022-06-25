import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class TextSchema extends BaseSchema {
  constructor() {
    super();
    this.id = SchemaId.Text;
    this.name = "文本";
    this.schemaId = Symbol(SchemaId.Text);
  }
}
