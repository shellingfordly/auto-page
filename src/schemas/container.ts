import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";
import { BaseSchemaApi, SchemaItemType } from "@/types";

export class ContainerSchema extends BaseSchema implements BaseSchemaApi {
  id: SchemaId;
  public contents: any[] = [];

  constructor(schema?: ContainerSchema) {
    super();
    this.id = SchemaId.Container;
    this.name = "容器";
    this.icon = "charm:container";
    this.schemaId = Symbol(SchemaId.Container);
  }

  newFunc(schema?: SchemaItemType) {
    return new ContainerSchema(schema as ContainerSchema);
  }
}
