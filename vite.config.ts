import { defineConfig } from "vite";
import { createPlugins } from "./build/plugins";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createPlugins()],
});
