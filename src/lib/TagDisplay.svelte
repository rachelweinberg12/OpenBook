<script lang="ts">
	import Tag from '$lib/Tag.svelte';
	export let tagList: [];
</script>

<div class="flex justify-center">
	{#if tagList}
		{#each tagList as tag}
			<Tag>{tag}</Tag>
		{/each}
	{:else}
		<i>none</i>
	{/if}
</div>
