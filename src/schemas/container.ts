import { SchemaId } from "@/enums/schema";
import { BaseSchema } from "./base";

export class ContainerSchema extends BaseSchema {
  id: SchemaId;
  public contents: any[] = [];

  constructor(schema?: ContainerSchema) {
    super();
    this.id = SchemaId.Container;
    this.name = "容器";
    this.icon = "charm:container";
    this.schemaId = Symbol(SchemaId.Container);
  }
}

interface A {
  a: number;
}

class AA implements A {
  a = 1;
}

class BB implements A {
  a = 2;
  b = 3;
}

function createA(a: A) {
  a.a;
}

createA(new BB());
