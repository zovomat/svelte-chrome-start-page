<script>
  const getCpuState = () =>
    chrome.system.cpu.getState((s) => {
      state = s;
    });
  let s = {};
  setInterval(() => {
    getCpuState();
  }, 500);
  $: console.log(s);
</script>

<h1>cpu</h1>

<style>
</style>
