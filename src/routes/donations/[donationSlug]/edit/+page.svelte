<script lang="ts">
	import type { PageData } from './$types';
	import CauseSelect from '$lib/CauseSelect.svelte';
	import Autocomplete from '$lib/Autocomplete.svelte';
	import TextInput from '$lib/TextInput.svelte';
	export let data: PageData;
	const donation = data.donation[0];

	let donor = donation.donor;
	let donee = donation.donee;
	let cause_array = donation.cause_array;
	let donation_date = donation.donation_date;
	let amount = donation.amount;
	let url = donation.url;
	let notes = donation.notes;
	let intended_use_of_funds = donation.intended_use_of_funds;
	let donation_process = donation.donation_process;
	let reason = donation.donor_donee_reason;
	let timing_reason = donation.donor_timing_reason;

	async function onSubmit() {
		console.log('onSubmit');
		let cause_string = arrayToString(cause_array);
		const newDonation = {
			donor,
			donee,
			cause_array,
			cause_string,
			donation_date,
			amount,
			url
		};
		console.log(newDonation);
		const data = await createDonation(newDonation);
		const newId = data[0].donation_id;
		goto(`/donations/${newId}`);
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key == 'Enter') {
			event.preventDefault();
			return false;
		}
	};
</script>

<p>hello world {donation.donor}</p>

<div class="my-16 mx-8">
	<h1 class="text-3xl text-center mb-6">Create a new donation</h1>
	<div class="flex justify-center">
		<form
			on:submit|preventDefault={onSubmit}
			class="flex flex-col w-1/2 gap-1"
			on:keydown={handleKeyDown}
		>
			<!-- <label class="z-0" for="donor">Donor</label>
			<Autocomplete options={data.donorNames} bind:value={donor} />
			<label class="z-0 mt-5" for="recipient">Recipient</label>
			<Autocomplete options={data.recipientNames} bind:value={donee} /> -->
			<label class="mt-5" for="cause">Causes</label>
			<CauseSelect bind:selected={cause_array} />
			<label class="mt-5" for="amount">Amount (USD)</label>
			<TextInput type="number" autocomplete="off" id="amount" name="amount" bind:value={amount} />
			<label class="mt-5" for="donation_date">Donation Date</label>
			<TextInput
				type="text"
				autocomplete="off"
				id="donation_date"
				name="donation_date"
				bind:value={donation_date}
			/>
			<label class="mt-5" for="url">URL</label>
			<TextInput type="text" autocomplete="off" id="url" name="url" bind:value={url} />
			<div class="flex justify-center mt-8">
				<button
					type="submit"
					class="bg-violet-400 py-2 px-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-xl text-white relative bottom-1"
					>Create</button
				>
			</div>
		</form>
	</div>
</div>
