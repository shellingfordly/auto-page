import { SchemaId } from "@/enums/schema";
import { BaseSchema, BaseStyle } from ".";

export class ContainerSchema extends BaseSchema {
  public name = "容器";
  public icon = "charm:container";
  public id = SchemaId.Container;
  public schemaId = Symbol(SchemaId.Container);
  public style = new BaseStyle({
    height: 300,
  });

  constructor(schema?: ContainerSchema) {
    super();
  }
}
