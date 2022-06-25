import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";

export function createComponentsPlugin() {
  return Components({
    resolvers: [
      ArcoResolver({
        importStyle: "css",
        sideEffect: true,
        // resolveIcons: true,
      }),
    ],
  });
}
