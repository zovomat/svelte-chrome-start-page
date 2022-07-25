<script lang="ts">
  import { onMount } from "svelte";
  let inputRef;
  let search = "";
  const onSubmit = (ev: SubmitEvent) => {
    ev.preventDefault();
    window.open(
      `https://www.google.com/search?q=${ev.target[0].value}`,
      "_self"
    );
    return false;
  };
  onMount(() => inputRef?.focus());
</script>

<form on:submit={onSubmit}>
  <input
    name="search"
    type="search"
    bind:this={inputRef}
    bind:value={search}
    on:submit={onSubmit}
  />
  <!-- <input type="submit" hidden /> -->
</form>

<style>
  form {
    grid-area: search;
    width: 100%;
  }
  input {
    width: 100%;
    padding: 0.8rem;
    
    outline: none;
  }
  
</style>
