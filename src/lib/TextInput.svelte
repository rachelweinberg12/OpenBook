<script lang="ts">
	export let text: string | null = null;
</script>

<input
	{...$$restProps}
	class="px-3 h-8 sm:h-12 border-gray-500 w-full rounded outline-none focus:ring focus:ring-violet-300 focus:border-gray-500"
	bind:value={text}
/>
