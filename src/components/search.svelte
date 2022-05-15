<script lang="ts">
  import { onMount } from "svelte";
  let inputRef;
  let search = "";
  const onSubmit = (ev: SubmitEvent) => {
    console.log(ev);
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
    color: white;
    background: rgba(0, 0, 0, 0.4);
    border: none;
    border-bottom: 1px solid white;
    box-shadow: 0 6px 40px -20px #78efff;
    text-shadow: 0px 0px 12px #78efff;
    transition: box-shadow 0.3s;
    outline: none;
  }
  input:focus {
    box-shadow: 0 6px 60px -20px #78efff;
  }
</style>
