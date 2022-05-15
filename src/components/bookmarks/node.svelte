<script lang="ts">
  import type { BookmarkNode } from "../../types";
  import Icon from "../base/icon.svelte";

  import Item from "./item.svelte";
  export let node: BookmarkNode;
  let open = false;
  const toggle = () => {
    console.log(!open, "crap");
    open = !open;
  };
</script>

<!-- <div class="node-wrapper"> -->
<div on:click={toggle} class="node-wrapper">
  <h3 class="swing-in-top-fwd">
    <Icon {open} />
    {node?.title}
  </h3>
</div>
{#each node?.children as nodeChild}
  {#if nodeChild.children}
    <svelte:self node={nodeChild} />
  {:else if open}
    <Item item={nodeChild} />
  {/if}
{/each}

<!-- </div> -->
<style>
  .node-wrapper {
    cursor: pointer;
  }
</style>
