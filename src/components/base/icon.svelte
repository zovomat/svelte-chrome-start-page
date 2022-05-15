<script lang="ts">
  export let open = false;
  let className = "closed";
  $: className = open ? "open" : "closed";
</script>

<svg
  width="1rem"
  height="1rem"
  class={className}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
>
  <path d="M24 30.1 12.7 18.75 14.3 17.15 24 26.85 33.7 17.15 35.3 18.8Z" />
</svg>

<style>
  svg {
    fill: white;
    transition: all 0.3s ease;
    transform: rotate(-90deg);
    filter: drop-shadow(0px 0px 1rem rgb(255, 98, 255));
  }
  .open {
    transform: rotate(0);
  }
</style>
