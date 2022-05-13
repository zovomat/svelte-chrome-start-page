<script lang="ts">
  import type { BookmarkNode } from "../../types";
  import H3 from "../base/h3.svelte";

  import Item from "./item.svelte";
  export let node: BookmarkNode;
</script>

<div>
  <H3>
    {node?.title}
  </H3>
  {#each node?.children as nodeChild}
    {#if nodeChild.children}
      <svelte:self node={nodeChild} />
    {:else}
      <Item item={nodeChild} />
    {/if}
  {/each}
</div>

<style>
  div {
    min-width: calc(max(400px, 20vw));
    padding: 1rem 0;
    padding-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
