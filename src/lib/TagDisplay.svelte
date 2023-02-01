<script lang="ts">
	import Tag from '$lib/Tag.svelte';
	export let tagList: string[];
	export let shortDisplay: boolean = false;
	export let maxTags: number = 3;
	$: displayedTags = shortDisplay && tagList ? tagList.slice(0, maxTags) : tagList;
	$: extras = tagList && shortDisplay ? tagList.length - maxTags : 0;
</script>

<div class="flex lg:justify-center justify-left text-base">
	{#if displayedTags}
		{#each displayedTags as tag}
			<Tag {tag} />
		{/each}
		{#if extras > 0}
			<span class="font-thin px-2">+{extras}</span>
		{/if}
	{:else}
		<i>none</i>
	{/if}
</div>
