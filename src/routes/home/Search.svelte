<script lang="ts">
	export let text: string = '';
</script>

<input
	{...$$restProps}
	type="text"
	class="border border-gray-200 rounded outline-none py-0 px-2 h-6 m-0 bg-transparent w-44 transition-all duration-100 focus:border-gray-300"
	placeholder="Search..."
	bind:value={text}
/>
