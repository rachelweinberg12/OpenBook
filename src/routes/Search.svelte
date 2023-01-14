<script lang="ts">
	export let text: string = '';
</script>

<input
	{...$$restProps}
	type="text"
	class="border-2 text-3xl border-gray-300 rounded outline-none px-3 h-16 m-0 bg-transparent w-full transition-all duration-100 focus:border-gray-300 focus:ring focus:ring-violet-300 my-10"
	placeholder="Search..."
	bind:value={text}
/>
