<script lang="ts">
	import { goto } from '$app/navigation';
	import { createDonation } from '$lib/db';

	// Default to today's date e.g. '202  3-01-15', corrected for timezone
	const offset = new Date().getTimezoneOffset();
	const today = new Date(new Date().getTime() - offset * 60 * 1000).toISOString().split('T')[0];

	let donor = '';
	let donee = '';
	let donation_date = today;
	let amount = 0;
	let url = '';

	async function onSubmit() {
		const newDonation = {
			donor,
			donee,
			donation_date,
			amount,
			url
		};
		const data = await createDonation(newDonation);
		const newId = data[0].donation_id;
		goto(`/donations/${newId}`);
	}
</script>

<!-- Allow user to create a new donation through a form-->
<div class="my-16 mx-20">
	<h1 class="text-3xl text-center mb-10">Create a new donation</h1>
	<div class="flex justify-center">
		<form on:submit|preventDefault={onSubmit} class="flex flex-col gap-4 w-1/2">
			<label for="donor">Donor</label>
			<input type="text" autocomplete="off" id="donor" name="donor" bind:value={donor} />
			<label for="donee">Recipient</label>
			<input type="text" autocomplete="off" id="donee" name="donee" bind:value={donee} />
			<label for="amount">Amount (USD)</label>
			<input type="number" autocomplete="off" id="amount" name="amount" bind:value={amount} />
			<label for="donation_date">Donation Date</label>
			<input
				type="text"
				autocomplete="off"
				id="donation_date"
				name="donation_date"
				bind:value={donation_date}
			/>
			<label for="url">URL</label>
			<input type="text" autocomplete="off" id="url" name="url" bind:value={url} />
			<div>
				<button
					type="submit"
					class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>Create</button
				>
			</div>
		</form>
	</div>
</div>
