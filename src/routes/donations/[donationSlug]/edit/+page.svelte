<script lang="ts">
	import type { PageData } from './$types';
	import CauseSelect from '$lib/CauseSelect.svelte';
	import TextInput from '$lib/TextInput.svelte';
	import RequiredStar from '$lib/RequiredStar.svelte';
	import { arrayToString } from '$lib/utils';
	import { goto } from '$app/navigation';
	import { updateDonation } from '$lib/db';
	import { dateRegex } from '$lib/utils';

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
		if (cause_array.length == 0) {
			cause_array = ['other'];
		}
		let cause_string = arrayToString(cause_array);
		let donation_id = donation.donation_id;
		const updatedDonation = {
			donation_id,
			donor,
			donee,
			cause_array,
			cause_string,
			donation_date,
			amount,
			url
		};
		console.log(updatedDonation);
		const data = await updateDonation(updatedDonation);
		goto(`/donations/${donation_id}`);
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key == 'Enter') {
			event.preventDefault();
			return false;
		}
	};
</script>

<div class="mt-10 mb-16">
	<h1 class="text-3xl text-center mb-6">Edit Donation</h1>
	<div class="flex justify-center">
		<form
			on:submit|preventDefault={onSubmit}
			class="flex flex-col w-1/2 gap-1"
			on:keydown={handleKeyDown}
		>
			<label class="z-0" for="donor"><RequiredStar />Donor</label>
			<TextInput
				required
				type="text"
				autocomplete="off"
				id="donor"
				name="donor"
				bind:text={donor}
			/>
			<label class="z-0 mt-5" for="recipient"><RequiredStar />Recipient</label>
			<TextInput
				required
				type="text"
				autocomplete="off"
				id="donee"
				name="donee"
				bind:text={donee}
			/>
			<label class="mt-5" for="donation_date"
				><RequiredStar />Donation Date
				<p class="text-gray-700 font-thin inline">(yyyy-mm-dd)</p></label
			>
			<TextInput
				type="text"
				autocomplete="off"
				id="donation_date"
				name="donation_date"
				required
				pattern={dateRegex}
				bind:text={donation_date}
			/>
			<label class="mt-5" for="amount"
				><RequiredStar />Amount
				<p class="text-gray-700 font-thin inline">(USD)</p></label
			>
			<TextInput
				type="number"
				autocomplete="off"
				id="amount"
				name="amount"
				required
				bind:text={amount}
			/>
			<label class="mt-5" for="cause">Causes</label>
			<CauseSelect bind:selected={cause_array} />
			<label class="mt-5" for="url">URL</label>
			<TextInput type="text" autocomplete="off" id="url" name="url" bind:text={url} />
			<label class="mt-5" for="intended_use_of_funds">Intended Use of Funds</label>
			<textarea
				id="intended_use_of_funds"
				class="px-3 h-20 w-full border-gray-500 rounded outline-none focus:ring focus:ring-violet-300 mb-3 focus:border-gray-500"
				bind:value={intended_use_of_funds}
			/>
			<label class="mt-5" for="donation_process">Donation Process</label>
			<textarea
				id="donation_process"
				class="px-3 h-20 w-full border-gray-500 rounded outline-none focus:ring focus:ring-violet-300 mb-3 focus:border-gray-500"
				bind:value={donation_process}
			/>
			<label class="mt-5" for="donor_donee_reason">Reason for donation</label>
			<textarea
				id="donor_donee_reason"
				class="px-3 h-20 w-full border-gray-500 rounded outline-none focus:ring focus:ring-violet-300 mb-3 focus:border-gray-500"
				bind:value={reason}
			/>
			<label class="mt-5" for="donor_timing_reason">Reason for timing of donation</label>
			<textarea
				id="donor_timing_reason"
				class="px-3 h-20 w-full border-gray-500 rounded outline-none focus:ring focus:ring-violet-300 mb-3 focus:border-gray-500"
				bind:value={timing_reason}
			/>

			<label class="mt-5" for="notes">Notes</label>
			<TextInput type="text" autocomplete="off" id="notes" name="notes" bind:text={notes} />
			<div class="flex justify-center mt-8">
				<button
					type="submit"
					class="bg-violet-400 py-2 px-3 rounded-md shadow-sm hover:cursor-pointer hover:shadow-xl text-white relative bottom-1"
					>Update Donation</button
				>
			</div>
		</form>
	</div>
</div>
