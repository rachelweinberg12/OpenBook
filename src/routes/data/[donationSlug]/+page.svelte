<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const donation = data.donation[0];
</script>

<body class="font-poppins">
	<h1 class="text-5xl">{donation.donor} to {donation.donee}</h1>
	<div>This is where grant specifics will go.</div>
</body>
