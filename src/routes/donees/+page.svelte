<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="p-4">
	<h2 class="text-xl mb-2">25 random donees</h2>

	<!-- Create a bullet point for each item in data.donees -->
	{#each data.donees as donee}
		<li>
			<a href={donee.website} class="hover:text-blue-800 hover:underline">{donee.donee}</a>
		</li>
	{/each}
</div>
