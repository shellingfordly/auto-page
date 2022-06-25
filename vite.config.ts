import { resolve } from "path";
import { defineConfig } from "vite";
import { createPlugins } from "./build/plugins";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3003,
  },
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: `${resolve(__dirname, "./src")}/`,
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            "src/styles/var/index.less"
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: createPlugins(),
});
