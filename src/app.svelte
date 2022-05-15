<script lang="ts">
  import Search from "./components/search.svelte";
  import Layout from "./components/layout.svelte";
  import Bookmarks from "./components/bookmarks/index.svelte";
  import Clock from "./components/clock.svelte";
  import { tree } from "./store";
  import Cpu from "./components/cpu.svelte";
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
  <Cpu />
  <Footer />
</Layout>
