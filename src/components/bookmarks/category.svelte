<script>
	import Item from './item.svelte';
	export let category
</script>

<div>
	<h3 class="swing-in-top-fwd">
		> {category.title}
	</h3>
	{#each category.children as item}
		<Item {item} />
	{/each}
</div>

<style>
	div {
		min-width: calc(max(400px, 20vw));
		padding: 1rem 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
</style>