<script>
	const formatCurrentTime = () => [
		new Date().toLocaleTimeString([], { timeStyle: 'short', hour12: false }),
		new Date().toDateString(),
		new Date().toLocaleTimeString([], { timeStyle: 'short', hour12: false, timeZone: 'IST' })
	];
	let [time, day, indiaTime] = formatCurrentTime();
	setInterval(() => {
		const td = formatCurrentTime();
		time = td[0];
		day = td[1];
		indiaTime = td[2];
	}, 10000);
</script>

<div class="clock-container">
	<div class="time-row"><h1 class="swing-in-top-fwd">{time}</h1><h2 class="swing-in-top-fwd-delayed">{indiaTime}</h2></div>
	<h2 class="swing-in-top-fwd-delayed">{day}</h2>
</div>

<style>
	.clock-container {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.time-row {
		display: flex;
		flex-direction: row;
		align-items: baseline;
	}
</style>