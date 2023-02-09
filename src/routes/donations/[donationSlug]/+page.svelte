<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import DetailIcon from '$lib/DetailIcon.svelte';
	import TagDisplay from '$lib/TagDisplay.svelte';

	import { urlify } from '$lib/utils';
	export let data: PageData;
	const donation = data.donation[0];

	let intended_use_of_funds: HTMLElement;
	let donation_process: HTMLElement;
	let reason: HTMLElement;
	let timing_reason: HTMLElement;
	let notes: HTMLElement;

	onMount(() => {
		if (donation.intended_use_of_funds && intended_use_of_funds) {
			intended_use_of_funds.innerHTML = urlify(donation.intended_use_of_funds);
		}
		if (donation.donation_process && donation_process) {
			donation_process.innerHTML = urlify(donation.donation_process);
		}
		if (donation.donor_donee_reason && reason) {
			reason.innerHTML = urlify(donation.donor_donee_reason);
		}
		if (donation.donor_timing_reason && timing_reason) {
			timing_reason.innerHTML = urlify(donation.donor_timing_reason);
		}
		if (donation.notes && notes) {
			notes.innerHTML = urlify(donation.notes);
		}
	});
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
<div class="flex justify-center mb-20 w-screen">
	<div class="flex flex-col gap-6 sm:text-lg text-md m-auto w-5/6">
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
		{#if donation.cause_array}
			<div class="flex flex-row gap-5">
				<DetailIcon category="cause_areas" />
				<TagDisplay tagList={donation.cause_array} />
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
				<p bind:this={intended_use_of_funds} />
			</div>
		{/if}
		{#if donation.donation_process != '\\N' && donation.donation_process}
			<div class="flex flex-row gap-5">
				<DetailIcon category="donation_process" />
				<p bind:this={donation_process} />
			</div>
		{/if}
		{#if donation.donor_donee_reason != '\\N' && donation.donor_donee_reason}
			<div class="flex flex-row gap-5">
				<DetailIcon category="reason" />
				<p bind:this={reason} />
			</div>
		{/if}
		{#if donation.donor_timing_reason != '\\N' && donation.donor_timing_reason}
			<div class="flex flex-row gap-5">
				<DetailIcon category="timing_reason" />
				<p bind:this={timing_reason} />
			</div>
		{/if}
		{#if donation.notes != '\\N' && donation.notes}
			<div class="flex flex-row gap-5">
				<DetailIcon category="notes" />
				<p bind:this={notes} />
			</div>
		{/if}
	</div>
</div>
<div class="fixed sm:right-10 right-8  bottom-12 group z-20">
	<a
		href="/donations/{donation.donation_id}/edit"
		class="bg-rose-400 rounded-full py-5 px-3 shadow-md text-white"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-8 h-8 inline"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
			/>
		</svg>
	</a>
</div>
