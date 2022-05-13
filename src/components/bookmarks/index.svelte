<script lang="ts">
  import type { BookmarkNode } from "./../../types";
  import Node from "./node.svelte";
  import { tree } from "../../store/index.js";

  let nodes: BookmarkNode[] = [];

  $: nodes =
    $tree?.[0]?.children?.find((nodes) => nodes.id === "1")?.children ?? [];
  $: console.log(nodes);
</script>

<div>
  {#each nodes as node}
    <Node {node} />
  {/each}
</div>

<style>
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
