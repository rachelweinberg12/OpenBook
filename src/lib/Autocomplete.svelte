<script lang="ts">
	export let options: string[];
	export let value: string;
	let filteredOptions: string[] = [];

	function filterOptions(search: string) {
		if (search === '') {
			filteredOptions = [];
		} else {
			filteredOptions = options.filter((item) => item != null);
			filteredOptions = filteredOptions.filter((item) =>
				item.toLowerCase().startsWith(search.toLowerCase())
			);
			if (filteredOptions.length > 5) {
				filteredOptions = filteredOptions.slice(0, 5);
			}
		}
	}

	function setValue(input: string) {
		value = input;
		filteredOptions = [];
	}
</script>

<input
	class="peer px-3 h-8 sm:h-12 border-gray-500 w-full rounded outline-none focus:ring focus:ring-violet-300 focus:border-gray-500"
	type="text"
	autocomplete="off"
	id="input"
	name="input"
	required
	bind:value
	on:input={() => filterOptions(value)}
/>
<ul class="hover:cursor-pointer grid gap-1 bg-white mt-0">
	{#each filteredOptions as match}
		<li class="bg-gray-100 hover:bg-violet-300 p-2" on:click|preventDefault={() => setValue(match)}>
			{match}
		</li>
	{/each}
</ul>
