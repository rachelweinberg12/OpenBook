<script lang="ts">
	import { formatLargeNumber } from '$lib/utils';
	import { formatDate } from '$lib/utils';
	import { checkFilter } from '$lib/utils';
	import Tr from '$lib/Tr.svelte';
	import TagDisplay from '$lib/TagDisplay.svelte';
	import TdLink from '$lib/TdLink.svelte';
	import CauseSelect from '$lib/CauseSelect.svelte';

	import { DataHandler } from '@vincjo/datatables';
	import Th from '@vincjo/datatables/Th.svelte';
	import RowsPerPage from '@vincjo/datatables/RowsPerPage.svelte';
	import RowCount from '@vincjo/datatables/RowCount.svelte';
	import Pagination from '@vincjo/datatables/Pagination.svelte';

	export let incoming: boolean;
	export let grantList: any[];
	let causes_in_view: string[] = [];
	$: causes_in_view && applyFilter();

	$: applyFilter = () => {
		if (causes_in_view.length == 0) {
			handler.setRows(grantList);
			return;
		}
		let filteredData = grantList.filter((row) => checkFilter(row.cause_array, causes_in_view));
		handler.setRows(filteredData);
	};

	let handler = new DataHandler(grantList, { rowsPerPage: 10 });
	$: rows = handler.getRows();
</script>

<div class="sm:px-10 px-5 mb-10">
	<div class="w-full">
		<header class="my-4 flex justify-between text-sm sm:text-md md:text-lg">
			<CauseSelect bind:selected={causes_in_view} placeholder="Filter by cause area" />
		</header>

		<table class="min-w-full divide-y divide-gray-300">
			<thead>
				<tr>
					<Th {handler} orderBy={'donation_date'}>DATE</Th>
					<Th {handler} orderBy={'amount'}>AMOUNT</Th>
					{#if incoming}
						<th scope="col" class="border-b border-gray-200 hidden lg:table-cell">DONOR</th>
					{:else}
						<th scope="col" class="border-b border-gray-200 hidden lg:table-cell">RECIPIENT</th>
					{/if}
					<th scope="col" class="border-b border-gray-200 hidden lg:table-cell">CAUSE AREAS</th>
				</tr>
			</thead>
			<tbody class="divide-y-4 divide-white bg-white border-collapse">
				{#each $rows as row}
					<Tr>
						<td class="text-left max-w-xxs sm:max-w-xs"
							><a href={`/donations/${row.donation_id}`} class="min-w-full block">
								{formatDate(row.donation_date)}
							</a>
							<div class="lg:hidden text-left text-xl py-3 ml-2">
								{#if incoming}
									<a class="mb-2 truncate hover:underline" href={`/org/${encodeURI(row.donor)}`}>
										{row.donor}
									</a>
								{:else}
									<a
										class="mb-2 truncate hover:underline block"
										href={`/org/${encodeURI(row.donee)}`}
									>
										{row.donee}
									</a>
								{/if}
								{#if row.cause_array}
									<a href={`/donations/${row.donation_id}`}>
										<TagDisplay tagList={row.cause_array} shortDisplay={true} maxTags={2} />
									</a>
								{/if}
							</div>
						</td>
						<td class="text-right px-5 align-top lg:align-middle"
							><a
								class="block lg:h-full h-28 min-w-full text-md"
								href={`/donations/${row.donation_id}`}>{'$' + formatLargeNumber(row.amount)}</a
							></td
						>
						{#if incoming}
							<TdLink url={`/org/${encodeURI(row.donor)}`}>{row.donor}</TdLink>
						{:else}
							<TdLink url={`/org/${encodeURI(row.donee)}`}>{row.donee}</TdLink>
						{/if}
						<td class="hidden lg:table-cell">
							<a href={`/donations/${row.donation_id}`}>
								<TagDisplay tagList={row.cause_array} shortDisplay={true} />
							</a>
						</td>
					</Tr>
				{/each}
			</tbody>
		</table>

		<footer class="mb-10 flex sm:justify-between sm:flex-row flex-col text-left">
			<div>
				<RowCount {handler} />
				{#if grantList.length > 10}
					<Pagination {handler} />
				{/if}
			</div>
			<div class="mt-3">
				{#if grantList.length > 10}<RowsPerPage {handler} />{/if}
			</div>
		</footer>
	</div>
</div>
