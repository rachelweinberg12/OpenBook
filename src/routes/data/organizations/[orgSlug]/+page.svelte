<script lang="ts">
	import type { PageData } from './$types';
	import Incomings from './Incomings.svelte';
	import Outgoings from './Outgoings.svelte';
	export let data: PageData;
	const donee_data = data.donee_data[0];
</script>

<body class="font-poppins">
	<h1 class="text-5xl">{data.name}</h1>
	{#if donee_data}
		<p class="text-5xl">This org is called {data.name} and is based in {donee_data.country}</p>
	{/if}
	{#if data.incomings.length > 0}
		<Incomings {data} />
	{/if}
	{#if data.outgoings.length > 0}
		<Outgoings {data} />
	{/if}
	<div>This is where organization specifics will go.</div>
</body>
