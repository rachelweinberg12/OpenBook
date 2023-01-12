<script lang="ts">
	import type { PageData } from './$types';
	import Search from './Search.svelte';
	import Donors from './Donors.svelte';
	import Recipients from './Recipients.svelte';
	import { formatLargeNumber } from '$lib/utils';

	import { DataHandler } from '@vincjo/datatables';
	import Th from '@vincjo/datatables/Th.svelte';
	import ThFilter from '@vincjo/datatables/ThFilter.svelte';
	import RowsPerPage from '@vincjo/datatables/RowsPerPage.svelte';
	import RowCount from '@vincjo/datatables/RowCount.svelte';
	import Pagination from '@vincjo/datatables/Pagination.svelte';

	import { searchDonations } from '$lib/db';
	export let data: PageData;

	let search: string = '';

	let handler = new DataHandler(data.donations, { rowsPerPage: 50 });
	$: rows = handler.getRows();

	function executeSearch() {
		if (search.length > 0) {
			searchDonations(search.replaceAll(' ', '<->')).then(
				(res) => (handler = new DataHandler(res, { rowsPerPage: 50 }))
			);
		} else {
			handler = new DataHandler(data.donations, { rowsPerPage: 50 });
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			executeSearch();
		}
	}
</script>

<div>
	<div class="flex gap-x-40 justify-center m-10">
		<Donors {data} />
		<Recipients {data} />
	</div>

	<div>
		<form class="font-poppins" on:keydown={onKeyDown}>
			<Search bind:text={search} />
		</form>

		<header class="font-poppins">
			<RowsPerPage {handler} />
		</header>

		<table class="font-poppins">
			<thead>
				<tr>
					<Th {handler} orderBy={'donation_date'}>Date</Th>
					<Th {handler} orderBy={'amount'}>Amount</Th>
					<th class="border-b border-gray-200">Donor</th>
					<th class="border-b border-gray-200">Recipient</th>
					<Th {handler} orderBy={'cause_area'}>Cause Area</Th>
				</tr>
				<tr>
					<ThFilter {handler} filterBy={'donation_date'} />
					<ThFilter {handler} filterBy={'amount'} />
					<ThFilter {handler} filterBy={'donor'} />
					<ThFilter {handler} filterBy={'donee'} />
					<ThFilter {handler} filterBy={'cause_area'} />
				</tr>
			</thead>
			<tbody>
				{#each $rows as row}
					<tr
						class="ring-white ring-4 h-12 rounded-lg bg-rose-50 text-center font-poppins hover:bg-rose-200 hover:cursor-pointer"
					>
						<td on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
							>{row.donation_date}</td
						>
						<td
							on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
							class="text-right px-5">{formatLargeNumber(row.amount)}</td
						>
						<td
							on:click={() =>
								(window.location.href = `/organizations/${row.donor.replaceAll(' ', '-')}`)}
							class="px-5">{row.donor}</td
						>
						<td
							on:click={() =>
								(window.location.href = `/organizations/${row.donee.replaceAll(' ', '-')}`)}
							>{row.donee}</td
						>
						<td on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
							>{row.cause_area}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>

		<footer class="font-poppins">
			<RowCount {handler} />
			<Pagination {handler} />
		</footer>
	</div>
</div>
