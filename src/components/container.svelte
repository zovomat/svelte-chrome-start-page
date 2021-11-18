<main>
	<slot/>
</main>
<style>

	main {
		min-width: 80%;
		max-width: 100%;
		height: 100%;
		overflow-y: auto;
		text-align: center;
		align-items: flex-start;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 1em;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		user-select: none;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>