<script lang="ts">
	export let text: string = '';
</script>

<input
	{...$$restProps}
	type="text"
	class=" border-gray-500 rounded outline-none px-3 h-8 sm:h-12 bg-transparent w-full transition-all duration-100 focus:ring focus:ring-violet-300 sm:mt-8 mt-2 mb-4 focus:border-gray-500"
	placeholder="Search..."
	bind:value={text}
/>
