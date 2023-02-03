<script lang="ts">
	import MultiSelect from 'svelte-multiselect';
	import Tag from '$lib/Tag.svelte';
	export let selected: any[] = [];
	export let placeholder: string = '';
	let open = false;
	const CAUSES = [
		'global health & wellbeing',
		'animal welfare',
		'AI safety',
		'biosecurity',
		'nuclear risk',
		'climate change',
		'global catastrophic risks',
		'other longtermism',
		'epistemic institutions',
		'migration policy',
		'criminal justice reform',
		'EA community',
		'other'
	];
</script>

<div class="w-full">
	<MultiSelect bind:selected options={CAUSES} {open} {placeholder} on:click={() => (open = !open)}>
		<p let:option slot="option" class="max-w-min text-md">
			<Tag tag={option} />
		</p>
		<p let:option slot="selected" class="max-w-min text-md">
			<Tag tag={option} />
		</p>
		<div slot="expand-icon" class="hover:cursor-pointer" on:click={() => (open = !open)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-4 h-6 mr-2 ml-1"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
			</svg>
		</div>
	</MultiSelect>
</div>
