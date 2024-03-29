import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    // sourceMap: !production,
    postcss: {
      plugins: [autoprefixer()],
    },
  }),
};
