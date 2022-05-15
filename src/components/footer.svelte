<script lang="ts">
  const click = () => {
    window.open(`chrome://bookmarks/`, "_blank");
  };
</script>

<div class="footer" on:click={click}>Manage Bookmarks</div>

<style>
  .footer {
    height: 2rem;
    grid-area: footer;
  }
</style>
