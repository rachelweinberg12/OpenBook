<script lang="ts">
	import type { PageData } from './$types';
	import Search from './Search.svelte';

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
			<Th {handler} orderBy={'donor'}>Donor</Th>
			<Th {handler} orderBy={'donee'}>Donee</Th>
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
				class="ring-white ring-4 h-10 rounded-lg bg-red-300 text-center font-poppins hover:bg-red-400 hover:cursor-pointer"
				on:click={() => (window.location.href = `/data/${row.donation_id}`)}
			>
				<td>{row.donation_date}</td>
				<td>{row.amount}</td>
				<td>{row.donor}</td>
				<td>{row.donee}</td>
				<td>{row.cause_area}</td>
			</tr>
		{/each}
	</tbody>
</table>

<footer class="font-poppins">
	<RowCount {handler} />
	<Pagination {handler} />
</footer>
