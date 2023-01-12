<script lang="ts">
	export let name: string;
	export let total: number;
	export let cause_areas: string[];
	import { formatLargeNumber } from '$lib/utils';
</script>

<div
	class="font-poppins bg-rose-50 p-10 m-5 rounded-lg h-60 w-1/5 border border-spacing-8 border-gray-200 shadow-lg hover:cursor-pointer hover:bg-rose-200"
	on:click={() => (window.location.href = `/orgs/${encodeURI(name)}`)}
>
	<h1 class="text-xl">{name}</h1>
	<p>Total: {formatLargeNumber(total)}</p>
	<p>Cause Areas: {cause_areas}</p>
</div>
