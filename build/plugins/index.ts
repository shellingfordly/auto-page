import { createArcoStyleImportPlugin } from "./createArcoStyleImportPlugin";
import { createAutoImportPlugin } from "./createAutoImportPlugin";
import { createComponentsPlugin } from "./createComponentsPlugin";
import vue from "@vitejs/plugin-vue";

export function createPlugins() {
  return [
    vue(),
    createArcoStyleImportPlugin(),
    createAutoImportPlugin(),
    createComponentsPlugin(),
  ];
}
