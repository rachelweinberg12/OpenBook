<script lang="ts">
	export let tag: string;

	const COLOR_MAP: Record<string, string> = {
		'AI safety': 'bg-blue-100',
		'epistemic institutions': 'bg-amber-100',
		'migration policy': 'bg-fuchsia-100',
		biosecurity: 'bg-lime-100',
		'global catastrophic risks': 'bg-emerald-100',
		'global health & wellbeing': 'bg-red-100',
		'EA community': 'bg-fuchsia-100',
		'animal welfare': 'bg-orange-100',
		'other longtermism': 'bg-pink-100',
		other: 'bg-slate-100',
		'criminal justice reform': 'bg-cyan-50',
		'climate change': 'bg-indigo-100'
	};
	$: color = COLOR_MAP[tag] ?? 'bg-slate-100';
</script>

<p
	class={`font-thin rounded-2xl h-6 px-2 mx-1 truncate overflow-hidden ${color} shadow-md`}
	title={tag}
>
	{tag}
</p>
