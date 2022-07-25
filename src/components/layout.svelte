<script lang="ts">
  import { theme } from "../store";
</script>

<main class={`layout bg fill ${$theme}-theme`}>
  <slot />
</main>

<style>
  .layout {
    display: grid;
    grid-template-columns: [left] 1fr [main] 3fr [side] 1fr;
    grid-template-rows: [clock-row] 20vh [search-row] 1fr [bookmarks-row] 60vh [footer] auto;
    grid-template-areas: "clock clock clock" ". search ." ". bookmarks ." ". footer .";
    gap: 2rem;
    align-items: baseline;
  }

  @media (max-width: 1200px) {
    .layout {
      grid-template-columns: [main] 1fr;
      grid-template-areas: "clock" "search" "bookmarks" "footer";
    }
  }

  .fill {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    padding: 2rem;
    box-sizing: border-box;
  }
</style>
