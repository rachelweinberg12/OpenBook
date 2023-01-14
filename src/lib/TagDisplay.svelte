<script lang="ts">
	import Tag from '$lib/Tag.svelte';
	export let tagList: [];
</script>

<div class="flex justify-center text-xl">
	{#if tagList}
		{#each tagList as tag}
			<Tag {tag} />
		{/each}
	{:else}
		<i>none</i>
	{/if}
</div>
