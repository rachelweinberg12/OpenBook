<script lang="ts">
	import OrgCard from './OrgCard.svelte';
	export let orgList: [];
	export let title: string;
	let interval = 5;
	let innerWidth = 0;
	$: large = innerWidth > 1024;
	$: xlarge = innerWidth > 1280;
	$: interval = xlarge ? 5 : large ? 4 : 3;
	let start = 0;
	$: end = start + interval;

	function next() {
		if (end < orgList.length - interval) {
			start += interval;
			end += interval;
		} else if (end < orgList.length) {
			start = orgList.length - interval;
			end = orgList.length;
		}
	}

	function prev() {
		if (start > interval) {
			start -= interval;
			end -= interval;
		} else if (start > 0) {
			start = 0;
			end = interval;
		}
	}
</script>

<svelte:window bind:innerWidth />

<div class="my-16">
	<h1 class="text-4xl xl:mx-40 mx-24">{title}</h1>
	<div class="flex mx-10 2xl:mx-32">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.2"
			stroke="currentColor"
			class="w-20 h-20 rotate-180 my-20 hover:cursor-pointer"
			on:click={() => prev()}
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		{#each orgList.slice(start, end) as org, i}
			<OrgCard name={org.name} total={org.total} rank={start + i + 1} />
		{/each}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.2"
			stroke="currentColor"
			class="w-20 h-20 my-20 hover:cursor-pointer"
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
