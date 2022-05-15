<script lang="ts">
  import Search from "./components/search.svelte";
  import Layout from "./components/layout.svelte";
  import System from "./components/system/index.svelte";
  import Bookmarks from "./components/bookmarks/index.svelte";
  import Clock from "./components/clock.svelte";
  import { tree } from "./store";
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
  <div class="footer" />
</Layout>

<style>
  .footer {
    height: 2rem;
    grid-area: footer;
  }
</style>
