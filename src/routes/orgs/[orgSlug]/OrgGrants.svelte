<script lang="ts">
	import { formatLargeNumber } from '$lib/utils';
	import { formatDate } from '$lib/utils';
	import Tr from '$lib/Tr.svelte';
	import TagDisplay from '$lib/TagDisplay.svelte';
	import TdLink from '$lib/TdLink.svelte';

	import { DataHandler } from '@vincjo/datatables';
	import Th from '@vincjo/datatables/Th.svelte';
	import RowsPerPage from '@vincjo/datatables/RowsPerPage.svelte';
	import RowCount from '@vincjo/datatables/RowCount.svelte';
	import Pagination from '@vincjo/datatables/Pagination.svelte';

	export let incoming: boolean;
	export let grantList: any[];

	let handler = new DataHandler(grantList, { rowsPerPage: 10 });
	$: rows = handler.getRows();
</script>

<div class="flex justify-center">
	<div class="font-poppins text-2xl">
		<header class="font-poppins relative">
			{#if grantList.length > 10}
				<div class="pt-7"><RowsPerPage {handler} /></div>
			{/if}
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
						{#if incoming}
							<TdLink on:click={() => (window.location.href = `/orgs/${encodeURI(row.donor)}`)}
								>{row.donor}</TdLink
							>
						{:else}
							<TdLink on:click={() => (window.location.href = `/orgs/${encodeURI(row.donee)}`)}
								>{row.donee}</TdLink
							>
						{/if}
						<td on:click={() => (window.location.href = `/donations/${row.donation_id}`)}>
							<TagDisplay tagList={row.cause_area_array} />
						</td>
					</Tr>
				{/each}
			</tbody>
		</table>

		<footer class="font-poppins">
			<RowCount {handler} />
			{#if grantList.length > 10}
				<Pagination {handler} />
			{/if}
		</footer>
	</div>
</div>
