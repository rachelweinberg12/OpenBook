<script lang="ts">
	export let text: string = '';
</script>

<input
	{...$$restProps}
	type="text"
	class="border-2 border-gray-200 rounded outline-none py-0 px-2 h-10 m-0 bg-transparent w-52 transition-all duration-100 focus:border-gray-300 focus:ring focus:ring-violet-300 my-5"
	placeholder="Search..."
	bind:value={text}
/>
