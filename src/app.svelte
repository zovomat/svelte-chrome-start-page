<script lang="ts">
  import Container from "./components/container.svelte";
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

<Container>
  <Clock />
  <Bookmarks />
</Container>
