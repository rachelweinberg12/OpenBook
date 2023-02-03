<script lang="ts">
	import type { PageData } from './$types';
	import Search from './Search.svelte';
	import { formatLargeNumber } from '$lib/utils';
	import { formatDate } from '$lib/utils';
	import { checkFilter } from '$lib/utils';
	import Tr from '$lib/Tr.svelte';
	import TdLink from '$lib/TdLink.svelte';
	import DataDownload from '$lib/DataDownload.svelte';
	import CauseSelect from '$lib/CauseSelect.svelte';

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
	let causes_in_view: string[] = [];
	$: causes_in_view && applyFilter();
	let searchedData: Object[] = data.donations;

	let handler = new DataHandler(searchedData, { rowsPerPage: 20 });
	$: rows = handler.getRows();

	function formatSearch() {
		let formattedSearch = search.trimEnd();
		formattedSearch = formattedSearch.replaceAll(' ', '<->');
		return formattedSearch;
	}

	function executeSearch() {
		if (search.length > 0) {
			searchDonations(formatSearch()).then((res) => {
				searchedData = res;
			});
		} else {
			searchedData = data.donations;
		}
		applyFilter();
	}

	function debounce(func: (...args: unknown[]) => unknown, delay = 200) {
		let timeout: NodeJS.Timeout;

		return function (...args: unknown[]) {
			clearTimeout(timeout);
			timeout = setTimeout(() => func(...args), delay);
		};
	}
	const debouncedSearch = debounce(executeSearch);

	function onKeyDown(event: KeyboardEvent) {
		debouncedSearch();
	}

	$: applyFilter = () => {
		if (causes_in_view.length == 0) {
			handler.setRows(searchedData);
			return;
		}
		let filteredData = searchedData.filter((row) => checkFilter(row.cause_array, causes_in_view));
		handler.setRows(filteredData);
	};
</script>

<div>
	<div class="flex justify-center mt-5 sm:px-10 px-5">
		<div class="w-full">
			<form on:keydown={onKeyDown}>
				<Search bind:text={search} />
			</form>
			<CauseSelect bind:selected={causes_in_view} />

			<header class="mb-1 flex justify-between text-sm sm:text-md md:text-lg">
				<RowsPerPage {handler} />
				<DataDownload />
			</header>

			<table class="min-w-full divide-y divide-gray-300">
				<thead>
					<tr>
						<Th {handler} orderBy={'donation_date'}>DATE</Th>
						<Th {handler} orderBy={'amount'}>AMOUNT</Th>
						<th scope="col" class="border-b border-gray-200 hidden lg:table-cell">DONOR</th>
						<th scope="col" class="border-b border-gray-200 hidden lg:table-cell">RECIPIENT</th>
						<th scope="col" class="border-b border-gray-200 hidden lg:table-cell">CAUSE AREAS</th>
					</tr>
				</thead>

				<tbody class="divide-y-4 divide-white bg-white border-collapse">
					{#each $rows as row}
						<!-- {#if checkFilter(row.cause_array)} -->
						<Tr>
							<td class="text-left max-w-xxs sm:max-w-xs pl-3"
								><a href={`/donations/${row.donation_id}`} class="min-w-full block">
									{formatDate(row.donation_date)}
								</a>
								<div class="lg:hidden text-left sm:text-xl py-3 ml-2">
									<a
										class="mt-1 truncate  hover:underline max-w-full"
										href={`/org/${encodeURI(row.donor.replaceAll('/', '^'))}`}>{row.donor}</a
									>
									<span class="text-gray-600 font-thin"> to </span>
									<a
										class="mb-2 truncate hover:underline block max-w-full"
										href={`/org/${encodeURI(row.donee.replaceAll('/', '^'))}`}
									>
										{row.donee}
									</a>
									{#if row.cause_array}
										<a href={`/donations/${row.donation_id}`}>
											<TagDisplay tagList={row.cause_array} shortDisplay={true} maxTags={2} />
										</a>
									{/if}
								</div>
							</td>
							<td class="text-right px-5 align-top lg:align-middle"
								><a class="block lg:h-full h-24 min-w-full" href={`/donations/${row.donation_id}`}
									>{formatLargeNumber(row.amount)}</a
								></td
							>
							<TdLink url={`/org/${encodeURI(row.donor.replaceAll('/', '^'))}`}>{row.donor}</TdLink>
							<TdLink url={`/org/${encodeURI(row.donee.replaceAll('/', '^'))}`}>{row.donee}</TdLink>
							<td class="hidden lg:table-cell">
								<a href={`/donations/${row.donation_id}`}>
									<TagDisplay tagList={row.cause_array} shortDisplay={true} maxTags={3} />
								</a>
							</td>
						</Tr>
						<!-- {/if} -->
					{/each}
				</tbody>
			</table>

			<footer class="mb-10">
				<RowCount {handler} />
				<Pagination {handler} />
			</footer>
		</div>
	</div>

	<OrgCardDisplay orgList={data.donors} title="Top Donors" />
	<OrgCardDisplay orgList={data.recipients} title="Top Recipients" />
</div>
