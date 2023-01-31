<script lang="ts">
	export let tag: string;

	const COLOR_MAP: Record<string, string> = {
		'AI safety': 'bg-orange-100',
		'epistemic institutions': 'bg-yellow-100',
		'migration policy': 'bg-fuchsia-100',
		biosecurity: 'bg-green-100',
		'global catastrophic risks': 'bg-teal-100',
		'global health & wellbeing': 'bg-red-100',
		'EA community': 'bg-rose-100',
		'animal welfare': 'bg-blue-100',
		'other longtermism': 'bg-pink-100',
		other: 'bg-slate-100',
		'criminal justice reform': 'bg-sky-100',
		'climate change': 'bg-indigo-100'
	};
	$: color = COLOR_MAP[tag] ?? 'bg-slate-100';
</script>

<p
	class={`font-thin rounded-2xl h-6 max-w-xxs px-2 mx-1 truncate overflow-hidden ${color} shadow-md`}
	title={tag}
>
	{tag}
</p>
