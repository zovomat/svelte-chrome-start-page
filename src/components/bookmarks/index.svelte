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
    <Node {node} root />
  {/each}
</div>

<style>
  div {
    overflow-y: auto;
    display: flex;
    grid-area: bookmarks;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    max-height: 100%;
    user-select: none;
  }

  /* Designing for scroll-bar */
  ::-webkit-scrollbar {
    width: 0.5rem;
    box-shadow: 0px 0px 24px -6px #78efff;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.6);
  }
</style>
