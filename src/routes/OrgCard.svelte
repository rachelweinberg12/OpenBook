<script lang="ts">
	export let name: string;
	export let total: number;
	export let rank: number;
	import { formatLargeNumber } from '$lib/utils';
</script>

<div
	class="bg-violet-100 p-3 m-2 md:p-5 md:m-5 rounded-lg h-52 xl:w-1/5 lg:w-1/4 w-1/3 shadow-md hover:shadow-xl hover:cursor-pointer hover:bg-violet-300 relative"
	on:click={() => (window.location.href = `/org/${encodeURI(name.replaceAll('/', '^'))}`)}
>
	<h1 class="md:text-xl sm:text-md text-sm mb-3 text-left">{name.replaceAll('/', '/ ')}</h1>
	<div
		class="text-left md:text-lg sm:text-md text-sm w-full bottom-3 left-3 md:bottom-5 md:left-5 absolute font-light"
	>
		<p>Total: {formatLargeNumber(total)}</p>
	</div>
	<div
		class="text-right md:text-lg sm:text-md text-sm w-full  bottom-3 right-3 md:bottom-5 md:right-5 absolute font-light"
	>
		<p>#{rank}</p>
	</div>
</div>
