<script>
	import Header from './Header.svelte';
	import '$lib/app.css';
</script>

<div class="app font-poppins">
	<Header />

	<main>
		<slot />
	</main>
</div>
