import { defineStore } from "pinia";

export const dragStore = defineStore({
  id: "dragStore",
  state: () => ({
    a: 1,
  }),
});
