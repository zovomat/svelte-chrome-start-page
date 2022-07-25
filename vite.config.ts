import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    svelte({
      hot: {
        // preserveLocalState: true
      },
    }),
  ],
});
