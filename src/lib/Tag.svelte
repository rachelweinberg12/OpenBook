<script lang="ts">
	export let tag: string;
	// Rewrite long cause areas
	tag = {
		'Biosecurity and pandemic preparedness': 'Biosecurity',
	}[tag] ?? tag;

	const color = {
		'AI safety': 'bg-red-200',
		'forecasting': 'bg-yellow-200',
		'Epistemic institutions': 'bg-green-200',
		'Migration policy': 'bg-blue-200',
		'Biosecurity': 'bg-indigo-200',
	}[tag] ?? 'bg-gray-200';


</script>

<p class={`font-thin rounded-2xl h-6 max-w-xxs px-2 mx-1 truncate overflow-hidden ${color}`}>
	{tag}
</p>
