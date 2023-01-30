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
	<div class="w-full">
		<header class="relative">
			{#if grantList.length > 10}
				<div class="my-5"><RowsPerPage {handler} /></div>
			{/if}
		</header>

		<table class="min-w-full divide-y divide-gray-300 mt-5">
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
			<tbody class="divide-y divide-gray-200 bg-white">
				{#each $rows as row}
					<Tr>
						<td class="text-left max-w-xxs sm:max-w-xs"
							><a href={`/donations/${row.donation_id}`} class="min-w-full block">
								{formatDate(row.donation_date)}
							</a>
							<div class="lg:hidden text-left sm:text-xl py-3 ml-2">
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
								{#if row.cause_area_array}
									<a href={`/donations/${row.donation_id}`}>
										<TagDisplay tagList={row.cause_area_array} shortDisplay={true} maxTags={2} />
									</a>
								{/if}
							</div>
						</td>
						<td class="text-right px-5 align-top lg:align-middle"
							><a class="block lg:h-full h-20 min-w-full" href={`/donations/${row.donation_id}`}
								>{formatLargeNumber(row.amount)}</a
							></td
						>
						{#if incoming}
							<TdLink url={`/org/${encodeURI(row.donor)}`}>{row.donor}</TdLink>
						{:else}
							<TdLink url={`/org/${encodeURI(row.donee)}`}>{row.donee}</TdLink>
						{/if}
						<td class="hidden lg:table-cell">
							<a href={`/donations/${row.donation_id}`}>
								<TagDisplay tagList={row.cause_area_array} shortDisplay={true} />
							</a>
						</td>
					</Tr>
				{/each}
			</tbody>
		</table>

		<footer class="mb-20">
			<RowCount {handler} />
			{#if grantList.length > 10}
				<Pagination {handler} />
			{/if}
		</footer>
	</div>
</div>
