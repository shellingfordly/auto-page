import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class NoticeSchema extends BaseSchema {
  constructor() {
    super();
    this.id = SchemaId.Notice;
    this.name = "公告";
    this.schemaId = Symbol(SchemaId.Notice);
  }
}
