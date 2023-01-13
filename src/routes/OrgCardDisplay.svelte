<script lang="ts">
	import OrgCard from './OrgCard.svelte';
	export let orgList: [];
	export let title: string;
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

<div class="my-10">
	<h1 class="text-5xl mx-40">{title}</h1>
	<div class="flex mx-40">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-20 h-20 rotate-180 my-24 hover:cursor-pointer"
			on:click={() => prev()}
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		{#each orgList.slice(start, end) as org}
			<OrgCard name={org.name} total={org.total} />
		{/each}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-20 h-20 my-24 hover:cursor-pointer"
			on:click={() => next()}
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</div>
</div>
