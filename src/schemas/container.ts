import { SchemaId } from "@/enums/schema";
import { BaseSchema, BaseStyle } from ".";
import { BaseSchemaApi, SchemaItemType } from "@/types";

export class ContainerSchema extends BaseSchema implements BaseSchemaApi {
  name = "容器";
  icon = "charm:container";
  id = SchemaId.Container;
  schemaId = Symbol(SchemaId.Container);
  style = new BaseStyle({
    backgroundColor: "red",
  });

  constructor(schema?: ContainerSchema) {
    super();
  }

  newFunc(schema?: SchemaItemType) {
    return new ContainerSchema(schema as ContainerSchema);
  }
}
