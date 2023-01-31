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
</script>

<div>
	<div class="flex justify-center mt-5 sm:px-20 px-2">
		<div class="w-full">
			<form on:keydown={onKeyDown}>
				<Search bind:text={search} />
			</form>

			<header class="mb-3">
				<RowsPerPage {handler} />
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

				<tbody class="divide-y divide-gray-200 bg-white">
					{#each $rows as row}
						<Tr>
							<td class="text-left max-w-xxs sm:max-w-xs pl-2"
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
									{#if row.standard_cause_areas.length > 0}
										<a href={`/donations/${row.donation_id}`}>
											<TagDisplay
												tagList={row.standard_cause_areas}
												shortDisplay={true}
												maxTags={2}
											/>
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
									<TagDisplay tagList={row.standard_cause_areas} shortDisplay={true} maxTags={3} />
								</a>
							</td>
						</Tr>
					{/each}
				</tbody>
			</table>

			<footer class="mb-20">
				<RowCount {handler} />
				<Pagination {handler} />
			</footer>
		</div>
	</div>

	<OrgCardDisplay orgList={data.donors} title="Top Donors" />
	<OrgCardDisplay orgList={data.recipients} title="Top Recipients" />
</div>
<!--
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Title
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Email
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Role
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {people.map((person) => (
              <tr key={person.email}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                  {person.name}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-1 truncate text-gray-700">{person.title}</dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.email}</dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{person.title}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.email}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{person.role}</td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {person.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
-->
