<script lang="ts">
	import type { PageData } from './$types';
	import Search from './Search.svelte';
	import { formatLargeNumber } from '$lib/utils';
	import Tr from '$lib/Tr.svelte';

	import OrgCardDisplay from './OrgCardDisplay.svelte';
	import TagDisplay from '$lib/TagDisplay.svelte';

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

<p>this works</p>

<div>
	<OrgCardDisplay orgList={data.donors} />
	<OrgCardDisplay orgList={data.recipients} />

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
					<Th {handler} orderBy={'cause_area_array'}>Cause Area</Th>
				</tr>
				<tr>
					<ThFilter {handler} filterBy={'donation_date'} />
					<ThFilter {handler} filterBy={'amount'} />
					<ThFilter {handler} filterBy={'donor'} />
					<ThFilter {handler} filterBy={'donee'} />
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
						<td
							on:click={() => (window.location.href = `/orgs/${encodeURI(row.donor)}`)}
							class="px-5">{row.donor}</td
						>
						<td on:click={() => (window.location.href = `/orgs/${encodeURI(row.donee)}`)}
							>{row.donee}</td
						>
						<td on:click={() => (window.location.href = `/donations/${row.donation_id}`)}>
							<TagDisplay tagList={row.cause_area_array} />
						</td>
					</Tr>
				{/each}
			</tbody>
		</table>

		<footer class="font-poppins">
			<RowCount {handler} />
			<Pagination {handler} />
		</footer>
	</div>
</div>
