<!-- A styled input that allows for customizing the input type, placeholder, and label -->
<script lang="ts">
	export let type: string = 'text';
	export let placeholder: string = '';
	export let label: string = '';
	export let value: string = '';

	// From https://stackoverflow.com/a/57393751
	const handleInput = (e: any) => {
		// in here, you can switch on type and implement
		// whatever behaviour you need
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	};
</script>

<div>
	<label for={label} class="block text-sm font-medium text-gray-700">{label}</label>
	<input
		id={label}
		{type}
		{placeholder}
		{value}
		on:input={handleInput}
		class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
	/>
</div>
