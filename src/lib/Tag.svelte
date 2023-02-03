<script lang="ts">
	export let tag: string;

	const COLOR_MAP: Record<string, string> = {
		'global health & wellbeing': 'bg-red-200',
		'animal welfare': 'bg-orange-200',
		'AI safety': 'bg-amber-200',
		biosecurity: 'bg-lime-200',
		'nuclear risk': 'bg-emerald-200',
		'climate change': 'bg-cyan-200',
		'global catastrophic risks': 'bg-blue-200',
		'other longtermism': 'bg-indigo-200',
		'epistemic institutions': 'bg-violet-200',
		'migration policy': 'bg-fuchsia-200',
		'criminal justice reform': 'bg-pink-200',
		'EA community': 'bg-rose-200',
		other: 'bg-slate-300'
	};
	$: color = COLOR_MAP[tag] ?? 'bg-slate-100';
</script>

<p
	class={`font-thin rounded-2xl h-6 px-2 mx-1 truncate overflow-hidden ${color} shadow-md`}
	title={tag}
>
	{tag}
</p>
