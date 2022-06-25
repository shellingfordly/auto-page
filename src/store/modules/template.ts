import { defineStore } from "pinia";

interface TemplateStateType {
  selectedId: Symbol | undefined;
}

export const TemplateStore = defineStore({
  id: "TemplateStore",
  state: (): TemplateStateType => ({
    selectedId: undefined,
  }),
  actions: {
    setSelectedId(id: Symbol | undefined) {
      this.selectedId = id;
    },
  },
});
