<script>
	import Category from './category.svelte';
	import { onDestroy } from 'svelte';
	import { tree } from '../../store/index.js';

	let categories = [];
	const unsub = tree.subscribe((t) => {
		categories = t?.children ?? [];
	})
	onDestroy(unsub)
</script>

<div>
	{#each categories as category}
		<Category {category}/>
	{/each}
</div>

<style>
	div {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
	}
</style>