<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import { formatLargeNumber } from '$lib/utils';

	import { DataHandler } from '@vincjo/datatables';
	import Th from '@vincjo/datatables/Th.svelte';
	import ThFilter from '@vincjo/datatables/ThFilter.svelte';
	import RowsPerPage from '@vincjo/datatables/RowsPerPage.svelte';
	import RowCount from '@vincjo/datatables/RowCount.svelte';
	import Pagination from '@vincjo/datatables/Pagination.svelte';

	let handler = new DataHandler(data.outgoings, { rowsPerPage: 20 });
	$: rows = handler.getRows();
</script>

<header class="font-poppins">
	<RowsPerPage {handler} />
</header>

<table class="font-poppins">
	<thead>
		<tr>
			<Th {handler} orderBy={'donation_date'}>Date</Th>
			<Th {handler} orderBy={'amount'}>Amount</Th>
			<Th {handler} orderBy={'donee'}>Recipient</Th>
			<Th {handler} orderBy={'cause_area'}>Cause Area</Th>
		</tr>
		<tr>
			<ThFilter {handler} filterBy={'donation_date'} />
			<ThFilter {handler} filterBy={'amount'} />
			<ThFilter {handler} filterBy={'donee'} />
			<ThFilter {handler} filterBy={'cause_area'} />
		</tr>
	</thead>
	<tbody>
		{#each $rows as row}
			<tr
				class="ring-white ring-4 h-10 rounded-lg bg-rose-50 text-center font-poppins hover:bg-rose-200 hover:cursor-pointer"
			>
				<td on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
					>{row.donation_date}</td
				>
				<td on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
					>{formatLargeNumber(row.amount)}</td
				>
				<td on:click={() => (window.location.href = `/orgs/${encodeURI(row.donee)}`)}
					>{row.donee}</td
				>
				<td>{row.cause_area}</td>
			</tr>
		{/each}
	</tbody>
</table>

<footer class="font-poppins">
	<RowCount {handler} />
	<Pagination {handler} />
</footer>
