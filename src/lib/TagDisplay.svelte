<script lang="ts">
	import Tag from '$lib/Tag.svelte';
	export let tagList: string[];
	export let shortDisplay: boolean = false;
	$: displayedTags = shortDisplay && tagList ? tagList.slice(0, 3) : tagList;
	console.log('displayed', displayedTags, 'tagList', tagList);
	$: extras = tagList && shortDisplay ? tagList.length - 3 : 0;
</script>

<div class="flex justify-center text-base">
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
