<script lang="ts">
	export let tag: string;
	// Rewrite long cause areas
	tag =
		{
			'Biosecurity and pandemic preparedness': 'Biosecurity'
		}[tag] ?? tag;

	const color =
		{
			'AI safety': 'bg-orange-100',
			forecasting: 'bg-yellow-100',
			'Epistemic institutions': 'bg-teal-100',
			'Migration policy': 'bg-blue-100',
			Biosecurity: 'bg-indigo-100'
		}[tag] ?? 'bg-slate-100';
</script>

<p
	class={`font-thin rounded-2xl h-6 max-w-xxs px-2 mx-1 truncate overflow-hidden ${color} shadow-sm`}
>
	{tag}
</p>
