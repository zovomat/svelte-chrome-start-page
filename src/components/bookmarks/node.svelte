<script lang="ts">
  import type { BookmarkNode } from "../../types";
  import Icon from "../base/icon.svelte";

  import Item from "./item.svelte";
  export let node: BookmarkNode;
  let open = false;
  export let root = false;
  const toggle = () => {
    open = !open;
  };
</script>

<div class="node-wrapper" class:zero={root}>
  <h3 class="swing-in-top-fwd" on:click={toggle}>
    <Icon {open} />
    {node?.title}
  </h3>
  {#if open}
    {#each node?.children as nodeChild}
      {#if nodeChild.children}
        <svelte:self node={nodeChild} />
      {:else}
        <Item item={nodeChild} />
      {/if}
    {/each}
  {/if}
</div>

<style>
  .node-wrapper {
    cursor: pointer;
    padding: 0.5rem 1.5rem;
  }
  .zero {
    padding: 0;
  }
</style>
