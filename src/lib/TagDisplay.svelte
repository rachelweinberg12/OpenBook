<script lang="ts">
	import Tag from '$lib/Tag.svelte';
	export let tagList: string[];
	export let shortDisplay: boolean = false;
	let shortened = false;
	let ogLen = 0;
	if (tagList && shortDisplay) {
		if (tagList.length > 3) {
			shortened = true;
			tagList = tagList.slice(0, 3);
			ogLen = tagList.length;
		}
	}
</script>

<div class="flex justify-center text-base">
	{#if tagList}
		{#each tagList as tag}
			<Tag {tag} />
		{/each}
		{#if shortened}
			<div class="flex flex-row gap-2">
				<div class="text-gray-500">+{ogLen - 3}</div>
			</div>
		{/if}
	{:else}
		<i>none</i>
	{/if}
</div>
