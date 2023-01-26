<script lang="ts">
	import { goto } from '$app/navigation';
	import { createDonation } from '$lib/db';
	import type { PageData } from './$types';
	export let data: PageData;
	const donors = data.donorNames;
	const recipients = data.recipientNames;
	let filteredDonors: string[] = [];
	let filteredRecipients: string[] = [];
	let donorInput;
	let recipientInput;

	// Default to today's date e.g. '202  3-01-15', corrected for timezone
	const offset = new Date().getTimezoneOffset();
	const today = new Date(new Date().getTime() - offset * 60 * 1000).toISOString().split('T')[0];

	let donor = '';
	let donee = '';
	let donation_date = today;
	let amount = 0;
	let url = '';

	async function onSubmit() {
		console.log('onSubmit');
		const newDonation = {
			donor,
			donee,
			donation_date,
			amount,
			url
		};
		console.log(newDonation);
		const data = await createDonation(newDonation);
		const newId = data[0].donation_id;
		goto(`/donations/${newId}`);
	}

	function filterDonors(search: string) {
		if (search === '') {
			filteredDonors = [];
		} else {
			filteredDonors = donors.filter((item) => item.toLowerCase().startsWith(search.toLowerCase()));
			if (filteredDonors.length > 5) {
				filteredDonors = filteredDonors.slice(0, 5);
			}
		}
	}
	function filterRecipients(search: string) {
		if (search === '') {
			filteredRecipients = [];
		} else {
			filteredRecipients = recipients.filter((item) =>
				item.toLowerCase().startsWith(search.toLowerCase())
			);
			if (filteredRecipients.length > 5) {
				filteredRecipients = filteredRecipients.slice(0, 5);
			}
		}
	}

	function setDonor(name: string) {
		donor = name;
		filteredDonors = [];
		document.querySelector('#donor').focus();
	}

	function setRecipient(name: string) {
		donee = name;
		filteredRecipients = [];
		document.querySelector('#recipient').focus();
	}

	function createDonor(name: string) {
		console.log('createDonor', name);
		donors.push(name);
		return name;
	}
</script>

<!-- Allow user to create a new donation through a form-->
<div class="my-16 mx-20">
	<h1 class="text-3xl text-center mb-10">Create a new donation</h1>
	<div class="flex justify-center">
		<form on:submit|preventDefault={onSubmit} class="flex flex-col w-1/2 gap-1">
			<label class="z-0" for="donor">Donor</label>
			<input
				class="peer rounded-sm focus:ring-2 focus:ring-violet-300 focus:ring-opacity-50 focus:border-violet-300"
				type="text"
				autocomplete="off"
				id="donor"
				name="donor"
				bind:value={donor}
				on:input={() => filterDonors(donor)}
			/>
			<ul class="hover:cursor-pointer grid gap-1 bg-white mt-0">
				{#each filteredDonors as match}
					<li
						class="bg-gray-100 hover:bg-violet-300 p-2"
						on:click|preventDefault={() => setDonor(match)}
					>
						{match}
					</li>
				{/each}
			</ul>
			<label class="z-0 mt-5" for="recipient">Recipient</label>
			<input
				class="peer rounded-sm focus:ring-2 focus:ring-violet-300 focus:ring-opacity-50 focus:border-violet-300"
				type="text"
				autocomplete="off"
				id="recipient"
				name="recipient"
				bind:value={donee}
				on:input={() => filterRecipients(donee)}
			/>
			<ul class="hover:cursor-pointer">
				{#each filteredRecipients as match}
					<li
						class="bg-gray-100 hover:bg-violet-300 p-2"
						on:click|preventDefault={() => setRecipient(match)}
					>
						{match}
					</li>
				{/each}
			</ul>
			<label class="mt-5" for="amount">Amount (USD)</label>
			<input
				class="rounded-sm focus:ring-2 focus:ring-violet-300 focus:ring-opacity-50 focus:border-violet-300"
				type="number"
				autocomplete="off"
				id="amount"
				name="amount"
				bind:value={amount}
			/>
			<label class="mt-5" for="donation_date">Donation Date</label>
			<input
				class="rounded-sm focus:ring-2 focus:ring-violet-300 focus:ring-opacity-50 focus:border-violet-300"
				type="text"
				autocomplete="off"
				id="donation_date"
				name="donation_date"
				bind:value={donation_date}
			/>
			<label class="mt-5" for="url">URL</label>
			<input
				class="rounded-sm focus:ring-2 focus:ring-violet-300 focus:ring-opacity-50 focus:border-violet-300"
				type="text"
				autocomplete="off"
				id="url"
				name="url"
				bind:value={url}
			/>
			<div>
				<button
					type="submit"
					class="mt-5 inline-flex items-center rounded-md border border-transparent bg-violet-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>Create</button
				>
			</div>
		</form>
	</div>
</div>
