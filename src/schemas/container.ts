import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class ContainerSchema extends BaseSchema {
  constructor(props: any) {
    super();
    this.id = SchemaId.Container;
    this.name = "容器";
    this.schemaId = Symbol(SchemaId.Container);
  }
}
