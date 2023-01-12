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
	import Search from '@vincjo/datatables/Search.svelte';

	let handler = new DataHandler(data.donors, { rowsPerPage: 5 });
	$: rows = handler.getRows();
</script>

<div>
	<header class="font-poppins">
		<Search {handler} />
		<RowsPerPage {handler} />
	</header>

	<table class="font-poppins">
		<thead>
			<tr>
				<th class="border-b border-gray-200">Name</th>
				<Th {handler} orderBy={'total'}>Total Given</Th>
			</tr>
			<tr>
				<ThFilter {handler} filterBy={'name'} />
				<ThFilter {handler} filterBy={'total'} />
			</tr>
		</thead>
		<tbody>
			{#each $rows as row}
				<Tr on:click={() => (window.location.href = `/organizations/${encodeURI(row.name)}`)}>
					<td class="whitespace-normal w-72 h-20 p-3">{row.name}</td>
					<td>{formatLargeNumber(row.total)}</td>
				</Tr>
			{/each}
		</tbody>
	</table>

	<footer class="font-poppins">
		<RowCount {handler} />
		<Pagination {handler} />
	</footer>
</div>
