<script>
import { beforeUpdate } from "svelte";


export let core;
const bars = [0,1,2,3,4];
let prevCore;
beforeUpdate(() => {
	prevCore = core;
});
$: console.log(prevCore?.usage.total - core?.usage.total);
</script>

<div class="container">
{#each bars as bar}
<div class="bar"/>
{/each}
<!-- <div class="filler" style={`height: ${core}%`}/> -->
</div>
<style>
.container {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 24px;
	padding: 8px;
	min-height: 32px;
	justify-content: space-between;
	align-items: center;
}
.bar {
	margin: 0;
	width: 100%;
	height: 1px;
	border-bottom: 1px solid #7decff;
}
/* .filler {
	background: aliceblue;
	position: absolute;
	bottom: 0;
} */
</style>