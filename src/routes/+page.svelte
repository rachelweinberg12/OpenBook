<script lang="ts">
	import type { PageData } from './home/$types';
	import Search from './Search.svelte';
	import { formatLargeNumber } from '$lib/utils';
	import { formatDate } from '$lib/utils';
	import Tr from '$lib/Tr.svelte';
	import TdLink from '$lib/TdLink.svelte';

	import OrgCardDisplay from './OrgCardDisplay.svelte';
	import TagDisplay from '$lib/TagDisplay.svelte';

	import { DataHandler } from '@vincjo/datatables';
	import Th from '@vincjo/datatables/Th.svelte';
	import RowsPerPage from '@vincjo/datatables/RowsPerPage.svelte';
	import RowCount from '@vincjo/datatables/RowCount.svelte';
	import Pagination from '@vincjo/datatables/Pagination.svelte';

	import { searchDonations } from '$lib/db';
	export let data: PageData;

	let search: string = '';

	let handler = new DataHandler(data.donations, { rowsPerPage: 20 });
	$: rows = handler.getRows();

	function executeSearch() {
		if (search.length > 0) {
			searchDonations(search.replaceAll(' ', '<->')).then((res) => handler.setRows(res));
		} else {
			handler.setRows(data.donations);
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			executeSearch();
		}
	}
</script>

<div class="text-m">
	<div class="flex justify-center my-5">
		<div>
			<form on:keydown={onKeyDown}>
				<Search bind:text={search} />
			</form>

			<header class="mb-3">
				<RowsPerPage {handler} />
			</header>

			<table class="border-separate border-spacing-0">
				<thead>
					<tr>
						<Th {handler} orderBy={'donation_date'}>Date</Th>
						<Th {handler} orderBy={'amount'}>Amount</Th>
						<th class="border-b border-gray-200">Donor</th>
						<th class="border-b border-gray-200">Recipient</th>
						<th class="border-b border-gray-200">Cause Area</th>
					</tr>
				</thead>

				<tbody>
					{#each $rows as row}
						<Tr>
							<td on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
								>{formatDate(row.donation_date)}</td
							>
							<td
								on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
								class="text-right px-5">{formatLargeNumber(row.amount)}</td
							>
							<TdLink
								on:click={() =>
									(window.location.href = `/orgs/${encodeURI(row.donor.replaceAll('/', '^'))}`)}
								>{row.donor}</TdLink
							>
							<TdLink
								on:click={() =>
									(window.location.href = `/orgs/${encodeURI(row.donee.replaceAll('/', '^'))}`)}
								>{row.donee}</TdLink
							>
							<td on:click={() => (window.location.href = `/donations/${row.donation_id}`)}>
								<TagDisplay tagList={row.cause_area_array} shortDisplay={true} />
							</td>
						</Tr>
					{/each}
				</tbody>
			</table>

			<footer>
				<RowCount {handler} />
				<Pagination {handler} />
			</footer>
		</div>
	</div>

	<OrgCardDisplay orgList={data.donors} title="Top Donors" />
	<OrgCardDisplay orgList={data.recipients} title="Top Recipients" />
</div>
