<script>
	import Core from "./core.svelte";
	const getCpuState = async () => chrome.system.cpu.getInfo();
	let promise = getCpuState();
	setInterval(() => {
		promise = getCpuState();
	}, 500);
</script>

<div class="cpu-container">
	<h3>> cpu</h3>
	<div class="core-container">
	{#await promise then cpu}
	{#each cpu.processors as core}
		<!-- <Core core={100 - ((Math.round(((core.usage.idle / core.usage.total) + Number.EPSILON) * 100) / 100) * 100)}/> -->
		<Core {core} />
	{/each}
	{/await}
	</div>
</div>
<style>
	.cpu-container {
		width: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
	}
	.core-container {
		height: 40px;
		width: fit-content;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: flex-end;
	}
</style>