<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const donee_data = data.donee_data[0];
</script>

<body class="font-poppins">
	{#if donee_data}
		<h1 class="text-5xl">This org is called {data.name} and is based in {donee_data.country}</h1>
	{/if}
	<p>this org has recieved money from {data.incomings[0].donor}</p>
	<div>This is where organization specifics will go.</div>
</body>
