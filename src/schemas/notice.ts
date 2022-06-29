import { SchemaId } from "@/enums/schema";
import { BaseSchema, BaseStyle } from ".";

export class NoticeSchema extends BaseSchema {
  public id = SchemaId.Notice;
  public name = "公告";
  public icon = "fe:notice-active";
  public schemaId = Symbol(SchemaId.Notice);
  public text = "This is NoticeSchema";

  constructor(schema?: NoticeSchema) {
    super();
    this.style = new BaseStyle({
      height: 30,
      padding: 0,
    });
  }

  setText(text: string) {
    this.text = text;
  }
}
