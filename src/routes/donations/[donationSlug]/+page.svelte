<script lang="ts">
	import type { PageData } from './$types';
	import DetailIcon from '$lib/DetailIcon.svelte';
	import TagDisplay from '$lib/TagDisplay.svelte';
	export let data: PageData;
	const donation = data.donation[0];
</script>

<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center my-16 mx-20">
	<a class="hover:underline" href="/org/{encodeURI(donation.donor.replaceAll('/', '^'))}"
		>{donation.donor}</a
	>
	to
	<a class="hover:underline" href="/org/{encodeURI(donation.donee.replaceAll('/', '^'))}"
		>{donation.donee}</a
	>
</h1>
<div class="flex justify-center mb-10 w-screen">
	<div class="flex flex-col gap-6 lg:text-2xl md:text-xl sm:text-lg text-md m-auto w-5/6">
		{#if donation.donation_date}
			<div class="flex flex-row gap-5">
				<DetailIcon category="date" />
				<p class="max-w-md">{donation.donation_date}</p>
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
		{#if donation.intended_use_of_funds != '\\N' && donation.intended_use_of_funds}
			<div class="flex flex-row gap-5">
				<DetailIcon category="intended_use_of_funds" />
				{donation.intended_use_of_funds}
			</div>
		{/if}
		{#if donation.donation_process != '\\N' && donation.donation_process}
			<div class="flex flex-row gap-5">
				<DetailIcon category="donation_process" />
				{donation.donation_process}
			</div>
		{/if}
		{#if donation.donor_donee_reason != '\\N' && donation.donor_donee_reason}
			<div class="flex flex-row gap-5">
				<DetailIcon category="reason" />
				{donation.donor_donee_reason}
			</div>
		{/if}
		{#if donation.donor_timing_reason != '\\N' && donation.donor_timing_reason}
			<div class="flex flex-row gap-5">
				<DetailIcon category="timing_reason" />
				{donation.donor_timing_reason}
			</div>
		{/if}
		{#if donation.notes != '\\N' && donation.notes}
			<div class="flex flex-row gap-5">
				<DetailIcon category="notes" />
				{donation.notes}
			</div>
		{/if}
	</div>
</div>
