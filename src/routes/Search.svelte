<script lang="ts">
	export let text: string = '';
</script>

<input
	{...$$restProps}
	type="text"
	class="border-2 border-gray-300 rounded outline-none px-3 h-8 sm:h-12 bg-transparent w-full transition-all duration-100 focus:border-gray-300 focus:ring focus:ring-violet-300 sm:mt-8 mt-2 mb-4"
	placeholder="Search..."
	bind:value={text}
/>
