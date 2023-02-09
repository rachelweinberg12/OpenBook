<script lang="ts">
	import { goto } from '$app/navigation';
	import { createDonation } from '$lib/db';
	import { arrayToString } from '$lib/utils';
	import type { PageData } from './$types';
	import Autocomplete from '$lib/Autocomplete.svelte';
	import CauseSelect from '$lib/CauseSelect.svelte';
	import TextInput from '$lib/TextInput.svelte';
	export let data: PageData;

	// Default to today's date e.g. '202  3-01-15', corrected for timezone
	const offset = new Date().getTimezoneOffset();
	const today = new Date(new Date().getTime() - offset * 60 * 1000).toISOString().split('T')[0];

	let donor = '';
	let donee = '';
	let cause_array: string[] = [];
	let donation_date = today;
	let amount = 0;
	let url = '';

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

<!-- Allow user to create a new donation through a form-->
<div class="my-16 mx-8">
	<h1 class="text-3xl text-center mb-6">Create a new donation</h1>
	<div class="flex justify-center">
		<form
			on:submit|preventDefault={onSubmit}
			class="flex flex-col w-1/2 gap-1"
			on:keydown={handleKeyDown}
		>
			<label class="z-0" for="donor">Donor</label>
			<Autocomplete options={data.donorNames} bind:value={donor} />
			<label class="z-0 mt-5" for="recipient">Recipient</label>
			<Autocomplete options={data.recipientNames} bind:value={donee} />
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
				bind:text={donation_date}
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
