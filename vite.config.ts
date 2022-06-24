import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { createStyleImportPlugin } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({}),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: "@arco-design/web-vue",
          esModule: true,
          resolveStyle: (name) => {
            // less
            return `@arco-design/web-vue/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  ],
});
