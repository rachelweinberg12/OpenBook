<script lang="ts">
	export let text: string | null = null;
	export let placeholder: string = '';
	export let id: string = '';
</script>

<input
	{...$$restProps}
	type="text"
	{id}
	{placeholder}
	class="px-3 h-8 sm:h-12 border-2 border-gray-300 w-full rounded-md outline-none focus:ring focus:ring-violet-300 mb-3 focus:border-gray-300"
	bind:value={text}
/>
