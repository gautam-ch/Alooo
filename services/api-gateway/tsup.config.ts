import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/app.ts", "src/server.ts"],
  format: ["esm"],
  clean: true,
  noExternal: ["@repo/types", "@repo/database"],
});
