<script lang="ts">
	import { formatLargeNumber } from '$lib/utils';
	import Tr from '$lib/Tr.svelte';

	import { DataHandler } from '@vincjo/datatables';
	import Th from '@vincjo/datatables/Th.svelte';
	import ThFilter from '@vincjo/datatables/ThFilter.svelte';
	import RowsPerPage from '@vincjo/datatables/RowsPerPage.svelte';
	import RowCount from '@vincjo/datatables/RowCount.svelte';
	import Pagination from '@vincjo/datatables/Pagination.svelte';

	export let incoming: boolean;
	export let grantList: [];

	let handler = new DataHandler(grantList, { rowsPerPage: 20 });
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
			{#if incoming}
				<Th {handler} orderBy={'donor'}>Donor</Th>
			{:else}
				<Th {handler} orderBy={'donee'}>Recipient</Th>
			{/if}
			<Th {handler} orderBy={'cause_area_array'}>Cause Area</Th>
		</tr>
		<tr>
			<ThFilter {handler} filterBy={'donation_date'} />
			<ThFilter {handler} filterBy={'amount'} />
			{#if incoming}
				<ThFilter {handler} filterBy={'donor'} />
			{:else}
				<ThFilter {handler} filterBy={'donee'} />
			{/if}
			<ThFilter {handler} filterBy={'cause_area_array'} />
		</tr>
	</thead>
	<tbody>
		{#each $rows as row}
			<Tr>
				<td on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
					>{row.donation_date}</td
				>
				<td
					on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
					class="text-right px-5">{formatLargeNumber(row.amount)}</td
				>
				{#if incoming}
					<td on:click={() => (window.location.href = `/orgs/${encodeURI(row.donor)}`)}
						>{row.donor}</td
					>
				{:else}
					<td on:click={() => (window.location.href = `/orgs/${encodeURI(row.donee)}`)}
						>{row.donee}</td
					>
				{/if}
				<td>{row.cause_area_array}</td>
			</Tr>
		{/each}
	</tbody>
</table>

<footer class="font-poppins">
	<RowCount {handler} />
	<Pagination {handler} />
</footer>
