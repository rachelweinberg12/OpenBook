<script lang="ts">
	export let text: string = '';
</script>

<input
	{...$$restProps}
	type="text"
	class="p-1 rounded-lg bg-white hover:cursor-pointer focus:outline-none focus:ring focus:ring-violet-300 ..."
	bind:value={text}
/>
