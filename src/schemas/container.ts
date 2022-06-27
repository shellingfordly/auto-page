import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class ContainerSchema extends BaseSchema {
  constructor(schema?: ContainerSchema) {
    super();
    this.id = SchemaId.Container;
    this.name = "容器";
    this.icon = "charm:container";
    this.schemaId = Symbol(SchemaId.Container);
  }
}
