<script lang="ts">
  import { theme } from "../store";

  const click = () => {
    chrome.tabs.create({ url: "chrome://bookmarks/" });
  };
  const themes = ["default", "gruvbox"];
  const onThemeSelect = (ev) => {
    theme.set(ev.target.value);
  };
</script>

<div class="footer">
  <!-- svelte-ignore a11y-missing-attribute -->
  <a on:click={click}>Manage Bookmarks</a>
  <select on:change={onThemeSelect} value={$theme}>
    {#each themes as theme}
      <option>{theme}</option>
    {/each}
  </select>
</div>

<style>
  .footer {
    height: 2rem;
    grid-area: footer;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: baseline;
    justify-content: end;
  }
  select {
    background: transparent;
    margin: 0;
    height: fit-content;
  }
  select:focus {
    border: none;
  }
  option {
    color: black;
  }
</style>
