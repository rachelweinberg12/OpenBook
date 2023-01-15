<script lang="ts">
	import type { PageData } from './$types';
	import DetailIcon from '$lib/DetailIcon.svelte';
	import TagDisplay from '$lib/TagDisplay.svelte';
	export let data: PageData;
	const donation = data.donation[0];
</script>

<body class="my-16">
	<h1 class="text-6xl text-center my-16 mx-20">
		<a class="hover:underline" href="/orgs/${encodeURI(donation.donor.replaceAll('/', '^'))}"
			>{donation.donor}</a
		>
		to
		<a class="hover:underline" href="/orgs/${encodeURI(donation.donee.replaceAll('/', '^'))}"
			>{donation.donee}</a
		>
	</h1>
	<div class="flex justify-center mb-10">
		<div class="flex flex-col gap-6 text-2xl w-6/12">
			{#if donation.donation_date}
				<div class="flex flex-row gap-5">
					<DetailIcon category="date" />
					{donation.donation_date}
				</div>
			{/if}
			{#if donation.amount}
				<div class="flex flex-row gap-5">
					<DetailIcon category="amount" />
					{donation.amount}
				</div>
			{/if}
			{#if donation.cause_area_array}
				<div class="flex flex-row gap-5">
					<DetailIcon category="cause_areas" />
					<TagDisplay tagList={donation.cause_area_array} />
				</div>
			{/if}
			{#if donation.url}
				<div class="flex flex-row gap-5">
					<DetailIcon category="grant_url" />
					<a class="hover:underline" href={donation.url}>{donation.url}</a>
				</div>
			{/if}
			{#if donation.intended_use_of_funds != '\\N'}
				<div class="flex flex-row gap-5">
					<DetailIcon category="intended_use_of_funds" />
					{donation.intended_use_of_funds}
				</div>
			{/if}
			{#if donation.donation_process != '\\N'}
				<div class="flex flex-row gap-5">
					<DetailIcon category="donation_process" />
					{donation.donation_process}
				</div>
			{/if}
			{#if donation.donor_donee_reason != '\\N'}
				<div class="flex flex-row gap-5">
					<DetailIcon category="reason" />
					{donation.donor_donee_reason}
				</div>
			{/if}
			{#if donation.donor_timing_reason != '\\N'}
				<div class="flex flex-row gap-5">
					<DetailIcon category="timing_reason" />
					{donation.donor_timing_reason}
				</div>
			{/if}
			{#if donation.notes != '\\N'}
				<div class="flex flex-row gap-5">
					<DetailIcon category="notes" />
					{donation.notes}
				</div>
			{/if}
		</div>
	</div>
</body>
