import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "astro:content": fileURLToPath(
        new URL("./src/__tests__/__stubs__/astro-content.ts", import.meta.url),
      ),
    },
  },
  test: {
    include: ["src/__tests__/**/*.test.ts"],
    environment: "node",
  },
});
