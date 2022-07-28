<script lang="ts">
  import Search from "./components/search.svelte";
  import Layout from "./components/layout.svelte";
  import Bookmarks from "./components/bookmarks/index.svelte";
  import Clock from "./components/clock.svelte";
  import { tree } from "./store";
  import Footer from "./components/footer.svelte";
  if (chrome) {
    chrome?.bookmarks?.getTree?.().then((t) => {
      tree.update(() => t);
    });
  }
</script>

<Layout>
  <Clock />
  <Search />
  <Bookmarks />
  <Footer />
</Layout>

<!-- <style lang="scss">
  @import "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;300&display=swap";
  @import "style/index";
</style> -->
