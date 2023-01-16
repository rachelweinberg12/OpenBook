<script>
	import Header from './Header.svelte';
	import '$lib/app.css';
</script>

<svelte:head>
	<script
		async
		defer
		src="https://analytics.umami.is/script.js"
		data-website-id="e0653aa1-fe3b-4659-9de1-32d36d802e19"
	></script>
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>
