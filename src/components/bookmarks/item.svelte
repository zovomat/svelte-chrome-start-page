<script>
	export let item
	const click = (ev) => {
		ev.preventDefault();
		document.querySelectorAll('a, h1, h2, h3').forEach(item => item.classList.add(item !== ev.target ? 'puff-out' : 'vibe'));
		// document.body.classList.add('puff-out');
		// document.body.style.color = '#fff0';
		setTimeout(() => {
			window.location.href = item.url;
		}, 300);

	}
</script>

<a class="swing-in-top-fwd-delayed" href={item.url} on:click={click}>
	{item.title}
</a>

<style>
	a {
		cursor: pointer;
		display: inline-block;
		color: inherit;
		padding: 0.7rem 1rem;
		box-sizing: border-box;
		width: 100%;
		text-decoration: none;
		text-shadow: 0px 0px 12px #78EFFF;
		/* background: rgba(0, 0, 0, 0); */
		transition: text-shadow 0.5s;/*background 0.5s, */
		text-align: start;
		text-overflow: ellipsis;
	}
	a:hover {
		/* background: rgba(0, 0, 0, 0.2); */
		text-shadow: 0px 0px 30px #78EFFF, 2px 2px 8px #000;
	}

</style>