<script>
	import Container from './components/container.svelte';
	import System from './components/system/index.svelte';
	import { tree } from './store/index.js';
	import Bookmarks from './components/bookmarks/index.svelte';
	import Clock from './components/clock.svelte';
	chrome.bookmarks?.getTree?.().then((t) => {
		const other = t[0].children.find(f => f.id === "2");
		if (other) {
			const mainFolder = other.children.find(f => f.title === "_start_page_");
			tree.update(() => mainFolder);
		}
	});
</script>

<Container>
	<Clock/>
	<Bookmarks/>
	<div/>
	<!-- <System/> -->
</Container>
