<script lang="ts">
	export let tag: string;
	// Rewrite long cause areas
	let text =
		{
			'Biosecurity and pandemic preparedness': 'Biosecurity'
		}[tag] ?? tag;

	text = text.toLowerCase();

	const color =
		{
			'ai safety': 'bg-orange-100',
			forecasting: 'bg-yellow-100',
			'epistemic institutions': 'bg-teal-100',
			'migration policy': 'bg-blue-100',
			biosecurity: 'bg-indigo-100',
			'coordination efforts': 'bg-green-100',
			'global health': 'bg-red-100',
			'talent pipeline': 'bg-sky-100',
			'vaccine development': 'bg-pink-100',
			disinfection: 'bg-gray-100',
			'effective altruism': 'bg-rose-100'
		}[text] ?? 'bg-slate-100';
</script>

<p
	class={`font-thin rounded-2xl h-8 max-w-xxs px-2 mx-1 truncate overflow-hidden ${color} shadow-md`}
	title={text}
>
	{text}
</p>
