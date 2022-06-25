import AutoImport from "unplugin-auto-import/vite";

export function createAutoImportPlugin() {
  return AutoImport({
    imports: ["vue", "vue-router"],
    dirs: ["src/hooks"],
  });
}
