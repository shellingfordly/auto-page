import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";
import { BaseSchemaApi, SchemaItemType } from "@/types";

export class NoticeSchema extends BaseSchema implements BaseSchemaApi {
  public text = "This is NoticeSchema";

  constructor(schema?: NoticeSchema) {
    super();
    this.id = SchemaId.Notice;
    this.name = "公告";
    this.icon = "fe:notice-active";
    this.schemaId = Symbol(SchemaId.Notice);
  }

  newFunc(schema?: SchemaItemType) {
    return new NoticeSchema(schema as NoticeSchema);
  }

  setText(text: string) {
    this.text = text;
  }
}
