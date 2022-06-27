import { SchemaItemType } from "@/types";
import { defineStore } from "pinia";

interface TemplateStateType {
  selectedSchemaId: Symbol | undefined;
  selectedSchema: SchemaItemType | null;
}

export const SchemaStore = defineStore({
  id: "SchemaStore",
  state: (): TemplateStateType => ({
    selectedSchemaId: undefined,
    selectedSchema: null,
  }),
  actions: {
    setSelectedId(id: Symbol | undefined) {
      this.selectedSchemaId = id;
    },
    setSelectedSchema(schema: SchemaItemType) {
      this.selectedSchema = schema;
    },
  },
});
