<script lang="ts">
  import type { CpuInfo } from "./../types";

  import { cpuInfo } from "./../store";
  const percentage = (idle: number, total: number): number =>
    (1 - idle / total) * 100;

  const differentials = (curr?: CpuInfo[], prev?: CpuInfo[]): number[] =>
    !curr
      ? []
      : curr.map((v, i) =>
          percentage(
            v.idle - (prev?.[i]?.idle ?? 0),
            v.total - (prev?.[i]?.total ?? 0)
          )
        );
  const average = (arr: number[]): number =>
    arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
  setInterval(() => {
    chrome.system.cpu.getInfo().then(({ processors }) => {
      const usages = processors.map((p) => p.usage);

      cpuInfo.update(({ prev, history }) => {
        const percentage = average(differentials(usages, prev));
        history.push(percentage);
        if (history.length > 100) history.shift();
        return {
          prev: usages,
          history,
        };
      });
    });
  }, 200);
</script>

<div class="cpu">
  {#each $cpuInfo.history as point}
    <div class="bar" style={`height: ${2 * point}%;`} />
  {/each}
</div>

<style lang="scss">
  .bar {
    background-color: white;
    width: 1px;
    min-height: 1px;
    box-shadow: 0px 0px 12px 1px #78efff;
  }
  .cpu {
    grid-area: utils;
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    grid-template-rows: 1fr;
    gap: 4px;
    height: 100%;
    align-items: flex-end;
  }
</style>
