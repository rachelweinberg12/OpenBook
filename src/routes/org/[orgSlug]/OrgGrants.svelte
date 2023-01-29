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
	<div class="text-lg">
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
							><p on:click={() => (window.location.href = `/donations/${row.donation_id}`)}>
								{formatDate(row.donation_date)}
							</p>
							<div class="lg:hidden text-left sm:text-xl py-2 ml-2">
								{#if incoming}
									<p
										class="mb-2 truncate hover:underline"
										on:click={() => (window.location.href = `/org/${encodeURI(row.donor)}`)}
									>
										{row.donor}
									</p>
								{:else}
									<p
										class="mb-2 truncate hover:underline"
										on:click={() => (window.location.href = `/org/${encodeURI(row.donee)}`)}
									>
										{row.donee}
									</p>
								{/if}
								{#if row.cause_area_array}
									<TagDisplay tagList={row.cause_area_array} shortDisplay={true} maxTags={2} />
								{/if}
							</div>
						</td>
						<td
							on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
							class="text-right px-5 align-top lg:align-middle">{formatLargeNumber(row.amount)}</td
						>
						{#if incoming}
							<TdLink on:click={() => (window.location.href = `/org/${encodeURI(row.donor)}`)}
								>{row.donor}</TdLink
							>
						{:else}
							<TdLink on:click={() => (window.location.href = `/org/${encodeURI(row.donee)}`)}
								>{row.donee}</TdLink
							>
						{/if}
						<td
							on:click={() => (window.location.href = `/donations/${row.donation_id}`)}
							class="hidden lg:table-cell"
						>
							<TagDisplay tagList={row.cause_area_array} shortDisplay={true} />
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
