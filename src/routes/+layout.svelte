<script>
	import Header from './Header.svelte';
	import '$lib/app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>
