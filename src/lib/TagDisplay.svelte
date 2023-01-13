<script lang="ts">
	import Tag from '$lib/Tag.svelte';
	export let tagList: [];
</script>

<div class="flex justify-center max-w-sm">
	{#if tagList}
		{#each tagList as tag}
			<Tag tag={tag}></Tag>
		{/each}
	{:else}
		<i>none</i>
	{/if}
</div>
