<script lang="ts">
	export let tag: string;
	// Rewrite long cause areas
	let text =
		{
			'Biosecurity and pandemic preparedness': 'Biosecurity',
			'biosecurity & pandemic preparedness': 'biosecurity',
			'effective altruism community growth (longtermism)': 'effective altruism',
			'potential risks from advanced ai': 'ai safety',
			'immigration policy': 'migration policy',
			'global health & wellbeing': 'global health'
		}[tag] ?? tag;

	text = text.toLowerCase();

	const color =
		{
			'ai safety': 'bg-orange-100',
			forecasting: 'bg-yellow-100',
			'epistemic institutions': 'bg-teal-100',
			'migration policy': 'bg-fuchsia-100',
			biosecurity: 'bg-green-100',
			'coordination efforts': 'bg-indigo-100',
			'global health': 'bg-red-100',
			'talent pipeline': 'bg-sky-100',
			'effective altruism': 'bg-rose-100',
			'animal welfare': 'bg-blue-100',
			longtermism: 'bg-pink-100',
			'farm animal welfare': 'bg-blue-100',
			'factory farming': 'bg-blue-100'
		}[text] ?? 'bg-slate-100';
</script>

<p
	class={`font-thin rounded-2xl h-6 max-w-xxs px-2 mx-1 truncate overflow-hidden ${color} shadow-md`}
	title={text}
>
	{text}
</p>
