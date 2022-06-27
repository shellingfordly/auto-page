import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class NoticeSchema extends BaseSchema {
  constructor(schema?: NoticeSchema) {
    super();
    this.id = SchemaId.Notice;
    this.name = "公告";
    this.icon = "fe:notice-active";
    this.schemaId = Symbol(SchemaId.Notice);
  }
}
