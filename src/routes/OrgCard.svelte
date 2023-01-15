<script lang="ts">
	export let name: string;
	export let total: number;
	export let rank: number;
	import { formatLargeNumber } from '$lib/utils';
</script>

<div
	class="bg-violet-100 p-5 m-5 rounded-lg h-52 w-1/5  shadow-md hover:shadow-xl hover:cursor-pointer hover:bg-violet-300 relative"
	on:click={() => (window.location.href = `/orgs/${encodeURI(name.replaceAll('/', '^'))}`)}
>
	<h1 class="text-xl mb-3 text-left">{name.replaceAll('/', '/ ')}</h1>
	<div class="text-left text-l w-full  bottom-5 left-5 absolute font-light">
		<p>Total: {formatLargeNumber(total)}</p>
	</div>
	<div class="text-right text-l w-full  bottom-5 right-5 absolute font-light"><p>#{rank}</p></div>
</div>
