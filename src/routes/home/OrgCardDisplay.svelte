<script lang="ts">
	import OrgCard from './OrgCard.svelte';
	export let orgList: [];
	let start = 0;
	let end = 5;

	function next() {
		if (end < orgList.length - 5) {
			start += 5;
			end += 5;
		} else if (end < orgList.length) {
			start = orgList.length - 5;
			end = orgList.length;
		}
	}

	function prev() {
		if (start > 5) {
			start -= 5;
			end -= 5;
		} else if (start > 0) {
			start = 0;
			end = 5;
		}
	}
</script>

<div class="flex mx-40">
	<button on:click={() => prev()}>Prev</button>
	{#each orgList.slice(start, end) as org}
		<OrgCard name={org.name} total={org.total} cause_areas={org.cause_areas} />
	{/each}
	<button on:click={() => next()}>Next</button>
</div>
