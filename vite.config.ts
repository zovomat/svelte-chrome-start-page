import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import svelteSVG from "vite-plugin-svelte-svg";

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
    svelteSVG({
      svgoConfig: {}, // See https://github.com/svg/svgo#configuration
    }),
  ],
});
